import { IconAnon, IconUser } from '../../Componentes/Icones/Icones';

export default function AlternarAnonimo({ anonimo, onChange }) {
  return (
    <div className="form-group">
      <label className="anon-toggle" htmlFor="anonToggle" onClick={onChange}>
        <div className={`toggle-track ${anonimo ? 'on' : ''}`}>
          <div className="toggle-thumb" />
        </div>
        <div className="toggle-text">
          <span className="toggle-label-row">
            {anonimo ? <IconAnon size={14} /> : <IconUser size={14} />}
            Envio anônimo
          </span>
          <span>{anonimo ? 'Seu nome não será registrado.' : 'Informe seu nome abaixo (opcional).'}</span>
        </div>
      </label>
    </div>
  );
}
