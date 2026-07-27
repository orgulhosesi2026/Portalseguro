import { useState } from 'react';
import { IconShield, IconInfo, IconWarning, IconSend } from '../../Componentes/Icones/Icones';
import { TURMAS } from '../../Constantes/turmas';
import { CATEGORIAS } from '../../Constantes/categorias';
import { LOCAIS } from '../../Constantes/locais';
import { gerarProtocolo } from '../../Utilitarios/gerarProtocolo';
import { useDenuncias } from '../../Hooks/useDenuncias';
import CartaoSucesso from './CartaoSucesso';
import AlternarAnonimo from './AlternarAnonimo';
import { validarFormulario } from './Denuncia.utils';

const FORM_INICIAL = {
  category: '', location: '', description: '', involved: '',
  witnesses: '', name: '', turma: '', anonymous: true,
};

export default function Denuncia({ mostrarToast }) {
  const { adicionar } = useDenuncias();
  const [form, setForm] = useState(FORM_INICIAL);
  const [enviado, setEnviado] = useState(false);
  const [erros, setErros] = useState({});
  const [ultimoProtocolo, setUltimoProtocolo] = useState('');

  const handleSubmit = () => {
    const e = validarFormulario(form);
    if (Object.keys(e).length) { setErros(e); return; }

    const id = gerarProtocolo();
    const denuncia = {
      id, ...form,
      name: form.anonymous ? 'Anônimo' : form.name || 'Anônimo',
      status: 'pendente', notasCoord: '',
      createdAt: new Date().toISOString(),
    };
    adicionar(denuncia);
    setUltimoProtocolo(id);
    setEnviado(true);
    mostrarToast('Denúncia enviada com sucesso!', 'success');
  };

  const handleReset = () => {
    setForm(FORM_INICIAL);
    setErros({});
    setEnviado(false);
  };

  const set = (chave, valor) => {
    setForm(f => ({ ...f, [chave]: valor }));
    if (erros[chave]) setErros(e => ({ ...e, [chave]: undefined }));
  };

  if (enviado) return <CartaoSucesso protocolo={ultimoProtocolo} onNovaDenuncia={handleReset} />;

  return (
    <div className="page-content">
      <div className="alert alert-info">
        <IconInfo size={15} style={{ flexShrink: 0, marginTop: 1 }} />
        <span>Sua identidade está protegida. Ative o modo anônimo ou, se preferir, informe seu nome para facilitar o acompanhamento.</span>
      </div>

      <div className="card">
        <div className="card-title">
          <div className="card-title-icon"><IconShield size={16} /></div>
          Registrar Ocorrência
        </div>

        <AlternarAnonimo anonimo={form.anonymous} onChange={() => set('anonymous', !form.anonymous)} />

        {!form.anonymous && (
          <>
            <div className="form-group">
              <label className="form-label">Seu nome</label>
              <input className="form-input" placeholder="Ex: João Silva"
                value={form.name} onChange={e => set('name', e.target.value)} />
              <div className="form-hint">Seu nome será visível apenas para a coordenação.</div>
            </div>
            <div className="form-group">
              <label className="form-label">Turma</label>
              <select className="form-select" value={form.turma} onChange={e => set('turma', e.target.value)}>
                <option value="">— Selecione sua turma —</option>
                {TURMAS.map(g => (
                  <optgroup key={g.grupo} label={g.grupo}>
                    {g.opcoes.map(o => <option key={o} value={o}>{o}</option>)}
                  </optgroup>
                ))}
              </select>
              <div className="form-hint">Opcional, mas ajuda a coordenação a identificar o contexto.</div>
            </div>
          </>
        )}

        <div className="divider" />

        <div className="form-group">
          <label className="form-label">Tipo de ocorrência <span className="required">*</span></label>
          <select className="form-select" value={form.category} onChange={e => set('category', e.target.value)}>
            <option value="">— Selecione —</option>
            {CATEGORIAS.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          {erros.category && (
            <div className="form-hint error-hint"><IconWarning size={12} /> {erros.category}</div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Local da ocorrência <span className="required">*</span></label>
          <select className="form-select" value={form.location} onChange={e => set('location', e.target.value)}>
            <option value="">— Selecione —</option>
            {LOCAIS.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
          {erros.location && (
            <div className="form-hint error-hint"><IconWarning size={12} /> {erros.location}</div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Descrição da ocorrência <span className="required">*</span></label>
          <textarea className="form-textarea"
            placeholder="Descreva o que aconteceu, quando ocorreu, com quem, e qualquer detalhe relevante…"
            value={form.description} onChange={e => set('description', e.target.value)} rows={5} />
          <div className={`form-hint ${erros.description ? 'error-hint' : ''}`}>
            {erros.description
              ? <><IconWarning size={12} /> {erros.description}</>
              : `${form.description.length} caracteres (mínimo 20)`}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Pessoa(s) envolvida(s)</label>
          <input className="form-input" placeholder="Ex: colega do 8º ano, professor de matemática…"
            value={form.involved} onChange={e => set('involved', e.target.value)} />
          <div className="form-hint">Opcional. Não use sobrenomes completos se preferir manter sigilo.</div>
        </div>

        <div className="form-group">
          <label className="form-label">Testemunhas</label>
          <input className="form-input" placeholder="Ex: alunos da sala que presenciaram…"
            value={form.witnesses} onChange={e => set('witnesses', e.target.value)} />
        </div>

        <div className="form-actions">
          <button className="btn btn-primary btn-full" onClick={handleSubmit}>
            <IconSend size={15} /> Enviar Denúncia
          </button>
          <button className="btn btn-secondary" onClick={handleReset} style={{ flexShrink: 0 }}>
            Limpar
          </button>
        </div>
      </div>
    </div>
  );
}
