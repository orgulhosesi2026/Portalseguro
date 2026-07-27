import { IconBook, IconWarning, IconTarget, IconPhone } from '../../Componentes/Icones/Icones';
import { TIPOS_BULLYING, INFO_CARDS, CONTATOS_AJUDA } from '../../Constantes/conteudoInformativo';
import { ItemTipoBullying, CartaoInfo, CartaoContato } from './ItensInformacao';

export default function Informacoes() {
  return (
    <div className="page-content">
      <div className="card">
        <div className="card-title">
          <div className="card-title-icon"><IconBook size={16} /></div>
          O que é bullying?
        </div>
        <p style={{ fontSize: 14, color: 'var(--neutral-600)', lineHeight: 1.7, marginBottom: 16 }}>
          Bullying é um comportamento agressivo, intencional e repetitivo que ocorre em relações desiguais de poder.
          Pode acontecer de forma física, verbal, psicológica ou digital e causa danos sérios a quem sofre.
        </p>
        <div className="alert alert-warn">
          <IconWarning size={15} style={{ flexShrink: 0, marginTop: 1 }} />
          <span>Bullying NÃO é brincadeira. É uma violência que deve ser combatida e denunciada.</span>
        </div>
      </div>

      <div className="card">
        <div className="card-title">
          <div className="card-title-icon"><IconTarget size={16} /></div>
          Tipos de bullying
        </div>
        <ul className="info-types-list">
          {TIPOS_BULLYING.map(t => <ItemTipoBullying key={t.titulo} {...t} />)}
        </ul>
      </div>

      <div className="info-grid">
        {INFO_CARDS.map(c => <CartaoInfo key={c.titulo} {...c} />)}
      </div>

      <div className="card">
        <div className="card-title">
          <div className="card-title-icon"><IconPhone size={16} /></div>
          Precisa de ajuda urgente?
        </div>
        <div className="contatos-grid">
          {CONTATOS_AJUDA.map(c => <CartaoContato key={c.nome} {...c} />)}
        </div>
      </div>
    </div>
  );
}
