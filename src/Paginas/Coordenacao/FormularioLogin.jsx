import { useState } from 'react';
import { IconLock } from '../../Componentes/Icones/Icones';

export default function FormularioLogin({ onEntrar }) {
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
// A senha é coord2026 ta 
  const handleLogin = () => {
    const ok = onEntrar(senha);
    if (!ok) {
      setErro('Senha incorreta. Tente novamente.');
      setSenha('');
    }
  };

  return (
    <div className="login-wrap">
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon"><IconLock size={26} /></div>
          <h2>Acesso à Coordenação</h2>
          <p>Esta área é restrita. Insira a senha de acesso.</p>
        </div>
        {erro && <div className="login-error">{erro}</div>}
        <div className="form-group">
          <label className="form-label">Senha</label>
          <input
            className="form-input"
            type="password"
            placeholder="••••••••"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            autoFocus
          />
        </div>
        <button className="btn btn-primary btn-full" onClick={handleLogin}>
          Entrar
        </button>
        <div className="login-footer">
          Portal Seguro · SESI Educação<br />
          Acesso somente para profissionais autorizados.
        </div>
      </div>
    </div>
  );
}
