import { useState } from 'react';
import { CHAVE_DENUNCIAS } from '../Constantes/armazenamento';

// Possivel alteraçao se precisar de Api no futuro, mas por enquanto é localStorage mesmo
export function useDenuncias() {
  const [denuncias, setDenuncias] = useState([]);

  const carregar = () => {
    setDenuncias(JSON.parse(localStorage.getItem(CHAVE_DENUNCIAS) || '[]'));
  };

  const adicionar = (novaDenuncia) => {
    const atuais = JSON.parse(localStorage.getItem(CHAVE_DENUNCIAS) || '[]');
    const proximas = [novaDenuncia, ...atuais];
    localStorage.setItem(CHAVE_DENUNCIAS, JSON.stringify(proximas));
    return proximas;
  };

  const atualizar = (denunciaAtualizada) => {
    const proximas = denuncias.map(d => d.id === denunciaAtualizada.id ? denunciaAtualizada : d);
    setDenuncias(proximas);
    localStorage.setItem(CHAVE_DENUNCIAS, JSON.stringify(proximas));
  };

  const remover = (id) => {
    const proximas = denuncias.filter(d => d.id !== id);
    setDenuncias(proximas);
    localStorage.setItem(CHAVE_DENUNCIAS, JSON.stringify(proximas));
  };

  return { denuncias, carregar, adicionar, atualizar, remover };
}
