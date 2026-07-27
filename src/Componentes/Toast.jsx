import { IconCheck, IconAlert, IconInfo } from './Icones/Icones';

const ICONES = {
  success: IconCheck,
  error: IconAlert,
  info: IconInfo,
};

export default function Toast({ msg, type = 'info' }) {
  const Icon = ICONES[type] || IconInfo;
  return (
    <div className={`toast ${type}`}>
      <span className="toast-icon-wrap"><Icon size={15} /></span>
      {msg}
    </div>
  );
}
