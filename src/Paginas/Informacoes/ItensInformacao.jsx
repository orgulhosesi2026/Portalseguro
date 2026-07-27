import { IconPhone } from '../../Componentes/Icones/Icones';

export function ItemTipoBullying({ titulo, desc }) {
  return (
    <li>
      <div className="dot" />
      <div><strong>{titulo}</strong> — {desc}</div>
    </li>
  );
}

export function CartaoInfo({ Icon, titulo, desc }) {
  return (
    <div className="info-item">
      <div className="info-item-icon"><Icon size={22} /></div>
      <h3>{titulo}</h3>
      <p>{desc}</p>
    </div>
  );
}

export function CartaoContato({ nome, descricao, contato }) {
  return (
    <div className="contato-card">
      <div className="contato-nome">{nome}</div>
      <div className="contato-desc">{descricao}</div>
      <div className="contato-tel">
        <IconPhone size={13} /> {contato}
      </div>
    </div>
  );
}
