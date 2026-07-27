import sesiLogo from '../Assets/sesilogo.png';
import { IconShield, IconBook, IconLock } from './Icones/Icones';

const ABAS = [
  { id: 'denuncia', label: 'Fazer Denúncia', Icon: IconShield },
  { id: 'informacoes', label: 'Informações', Icon: IconBook },
  { id: 'coordenacao', label: 'Coordenação', Icon: IconLock },
];

export default function Navbar({ aba, setAba }) {
  return (
    <nav className="topbar">
      <a className="topbar-brand" href="#top">
        <img src={sesiLogo} alt="SESI" className="topbar-logo-img" />
        <div className="topbar-brand-text">
          <span>Portal Seguro</span>
          <span>SESI IBURA</span>
        </div>
      </a>
      <div className="topbar-nav">
        {ABAS.map(({ id, label, Icon }) => (
          <div key={id} className="nav-btn-wrap">
            <button
              className={aba === id ? 'active' : ''}
              onClick={() => setAba(id)}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
}
