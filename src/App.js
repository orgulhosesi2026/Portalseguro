import { useState } from 'react';
import Navbar from './Componentes/Navbar';
import Hero from './Componentes/Hero';
import Toast from './Componentes/Toast';
import Denuncia from './Paginas/Denuncia/Denuncia';
import Informacoes from './Paginas/Informacoes/Informacoes';
import Coordenacao from './Paginas/Coordenacao/Coordenacao';
import { useToast } from './Hooks/useToast';

export default function App() {
  const [aba, setAba] = useState('denuncia');
  const { toast, mostrarToast } = useToast();

  return (
    <div>
      <Navbar aba={aba} setAba={setAba} />
      <Hero aba={aba} />
      <main>
        {aba === 'denuncia' && <Denuncia mostrarToast={mostrarToast} />}
        {aba === 'informacoes' && <Informacoes />}
        {aba === 'coordenacao' && <Coordenacao mostrarToast={mostrarToast} />}
      </main>
      {toast && <Toast key={toast.id} msg={toast.msg} type={toast.type} />}
    </div>
  );
}
