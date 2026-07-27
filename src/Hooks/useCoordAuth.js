import { useState } from 'react';
import { SENHA_HASH } from '../Constantes/autenticacao';
// So importar o hook e chamar useCoordAuth() para obter { logado, entrar, sair }.

export function useCoordAuth() {
  const [logado, setLogado] = useState(false);

  const entrar = (senha) => {
    const ok = btoa(senha) === SENHA_HASH;
    if (ok) setLogado(true);
    return ok;
  };

  const sair = () => setLogado(false);

  return { logado, entrar, sair };
}
