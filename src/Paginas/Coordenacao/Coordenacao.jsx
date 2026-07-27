import { useState, useEffect } from 'react';
import { IconRefresh, IconSearch, IconLogout } from '../../Componentes/Icones/Icones';
import { STATUS_LABELS } from '../../Constantes/statusConfig';
import { useDenuncias } from '../../Hooks/useDenuncias';
import { useCoordAuth } from '../../Hooks/useCoordAuth';
import FormularioLogin from './FormularioLogin';
import CartaoDenuncia from './CartaoDenuncia';
import CartaoEstatistica from './CartaoEstatistica';
import EstadoVazio from './EstadoVazio';

export default function Coordenacao({ mostrarToast }) {
  const { logado, entrar, sair } = useCoordAuth();
  const { denuncias, carregar, atualizar, remover } = useDenuncias();
  const [filtroStatus, setFiltroStatus] = useState('todas');
  const [filtroCategoria, setFiltroCategoria] = useState('todas');
  const [busca, setBusca] = useState('');

  useEffect(() => { if (logado) carregar(); }, [logado]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAtualizar = (atualizada) => {
    atualizar(atualizada);
    mostrarToast('Denúncia atualizada!', 'success');
  };

  const handleRemover = (id) => {
    remover(id);
    mostrarToast('Denúncia removida.', 'success');
  };

  if (!logado) return <FormularioLogin onEntrar={entrar} />;

  const categorias = ['todas', ...new Set(denuncias.map(d => d.category))];

  const filtradas = denuncias.filter(d => {
    const combinaStatus = filtroStatus === 'todas' || d.status === filtroStatus;
    const combinaCategoria = filtroCategoria === 'todas' || d.category === filtroCategoria;
    const q = busca.toLowerCase();
    const combinaBusca = !q
      || d.description.toLowerCase().includes(q)
      || d.category.toLowerCase().includes(q)
      || d.location.toLowerCase().includes(q)
      || (d.name || '').toLowerCase().includes(q)
      || d.id.toLowerCase().includes(q);
    return combinaStatus && combinaCategoria && combinaBusca;
  });

  const stats = {
    total: denuncias.length,
    pendente: denuncias.filter(d => d.status === 'pendente').length,
    analise: denuncias.filter(d => d.status === 'analise').length,
    resolvido: denuncias.filter(d => d.status === 'resolvido').length,
  };

  return (
    <div className="page-content-wide">
      <div className="stats-grid">
        <CartaoEstatistica valor={stats.total} label="Total de denúncias" />
        <CartaoEstatistica valor={stats.pendente} label="Pendentes" cor="var(--sesi-orange)" />
        <CartaoEstatistica valor={stats.analise} label="Em análise" cor="#92400e" />
        <CartaoEstatistica valor={stats.resolvido} label="Resolvidas" cor="var(--sesi-green)" />
      </div>

      <div className="card">
        <div className="section-header">
          <div>
            <h2>Denúncias Recebidas</h2>
            <p>{filtradas.length} resultado{filtradas.length !== 1 ? 's' : ''} encontrado{filtradas.length !== 1 ? 's' : ''}</p>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button className="btn btn-secondary btn-sm" onClick={carregar}>
              <IconRefresh size={14} /> Atualizar
            </button>
            <button className="btn btn-secondary btn-sm" onClick={sair}>
              <IconLogout size={14} /> Sair
            </button>
          </div>
        </div>

        <div className="filters-row">
          <div className="filter-search-wrap">
            <IconSearch size={14} className="filter-search-icon" />
            <input
              className="filter-search"
              placeholder="Buscar por descrição, categoria, ID…"
              value={busca}
              onChange={e => setBusca(e.target.value)}
            />
          </div>
          <select className="filter-select" value={filtroStatus} onChange={e => setFiltroStatus(e.target.value)}>
            <option value="todas">Todos os status</option>
            {Object.entries(STATUS_LABELS).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
          <select className="filter-select" value={filtroCategoria} onChange={e => setFiltroCategoria(e.target.value)}>
            {categorias.map(c => <option key={c} value={c}>{c === 'todas' ? 'Todas as categorias' : c}</option>)}
          </select>
        </div>

        {filtradas.length === 0
          ? <EstadoVazio existemDenuncias={denuncias.length > 0} />
          : (
            <div className="denuncia-list">
              {filtradas.map(d => (
                <CartaoDenuncia key={d.id} denuncia={d} onAtualizar={handleAtualizar} onRemover={handleRemover} />
              ))}
            </div>
          )}
      </div>
    </div>
  );
}
