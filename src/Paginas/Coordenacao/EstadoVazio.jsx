import { IconInbox } from '../../Componentes/Icones/Icones';

export default function EstadoVazio({ existemDenuncias }) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon"><IconInbox size={44} /></div>
      <h3>{existemDenuncias ? 'Nenhum resultado para os filtros aplicados.' : 'Nenhuma denúncia recebida ainda.'}</h3>
      <p>{existemDenuncias ? 'Tente ajustar os filtros de busca.' : 'Quando os alunos enviarem denúncias, elas aparecerão aqui.'}</p>
    </div>
  );
}
