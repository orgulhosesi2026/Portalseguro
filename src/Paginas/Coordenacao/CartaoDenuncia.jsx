import { useState } from 'react';
import {
  IconUser, IconPin, IconTrash, IconSave, IconNote, IconAnon,
  IconChevronDown, IconChevronUp,
} from '../../Componentes/Icones/Icones';
import { STATUS_LABELS } from '../../Constantes/statusConfig';
import { formatarData } from '../../Utilitarios/formatarData';
import CampoDenuncia from './CampoDenuncia';

export default function CartaoDenuncia({ denuncia, onAtualizar, onRemover }) {
  const [expandido, setExpandido] = useState(false);
  const [status, setStatus] = useState(denuncia.status);
  const [notas, setNotas] = useState(denuncia.notasCoord || '');

  const salvar = () => onAtualizar({ ...denuncia, status, notasCoord: notas });

  const confirmarExclusao = () => {
    if (window.confirm('Deseja excluir esta denúncia permanentemente?')) onRemover(denuncia.id);
  };

  return (
    <div className="denuncia-card">
      <div className="denuncia-card-header" onClick={() => setExpandido(v => !v)}>
        <div>
          <div className="denuncia-meta">
            <span className="denuncia-id">#{denuncia.id}</span>
            <span className="denuncia-category-tag">{denuncia.category}</span>
            <span className="badge location-badge">
              <IconPin size={10} /> {denuncia.location}
            </span>
          </div>
          <div className="denuncia-date" style={{ marginTop: 4 }}>
            {denuncia.anonymous
              ? <><IconAnon size={12} /> Anônimo</>
              : <><IconUser size={12} /> {denuncia.name}{denuncia.turma ? ` · ${denuncia.turma}` : ''}</>
            }
            {' · '}{formatarData(denuncia.createdAt)}
          </div>
        </div>
        <div className="denuncia-actions" onClick={e => e.stopPropagation()}>
          <span className={`badge ${STATUS_LABELS[denuncia.status]?.cls || 'badge-pendente'}`}>
            {STATUS_LABELS[denuncia.status]?.label || 'Pendente'}
          </span>
          <span className="expand-icon">
            {expandido ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
          </span>
        </div>
      </div>

      {expandido && (
        <div className="denuncia-body">
          <CampoDenuncia label="Descrição" value={denuncia.description} />
          <CampoDenuncia label="Envolvidos" value={denuncia.involved} />
          {!denuncia.anonymous && <CampoDenuncia label="Turma" value={denuncia.turma} />}
          <CampoDenuncia label="Testemunhas" value={denuncia.witnesses} />

          <div className="denuncia-status-row">
            <select className="status-select" value={status} onChange={e => setStatus(e.target.value)}>
              {Object.entries(STATUS_LABELS).map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>
            <input
              className="notes-input"
              placeholder="Anotações internas (encaminhamentos, medidas tomadas…)"
              value={notas}
              onChange={e => setNotas(e.target.value)}
            />
            <button className="btn btn-primary btn-sm" onClick={salvar}>
              <IconSave size={14} /> Salvar
            </button>
            <button className="btn btn-danger btn-sm" onClick={confirmarExclusao}>
              <IconTrash size={14} />
            </button>
          </div>

          {denuncia.notasCoord && (
            <div className="nota-salva">
              <IconNote size={13} /> <strong>Anotação salva:</strong> {denuncia.notasCoord}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
