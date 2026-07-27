import { IconCheckCircle, IconEdit } from '../../Componentes/Icones/Icones';

export default function CartaoSucesso({ protocolo, onNovaDenuncia }) {
  return (
    <div className="page-content">
      <div className="card success-card">
        <div className="success-icon-wrap">
          <IconCheckCircle size={52} style={{ color: 'var(--sesi-green)' }} />
        </div>
        <h2 className="success-title">Denúncia registrada!</h2>
        <p className="success-sub">
          Sua denúncia foi recebida e será analisada pela coordenação. Guarde o protocolo abaixo para acompanhamento.
        </p>
        <div className="protocol-box">
          <div className="protocol-label">Nº do protocolo</div>
          <div className="protocol-id">{protocolo}</div>
        </div>
        <button className="btn btn-primary" onClick={onNovaDenuncia}>
          <IconEdit size={15} /> Nova Denúncia
        </button>
      </div>
    </div>
  );
}
