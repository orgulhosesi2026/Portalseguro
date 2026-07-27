import { IconShield, IconBook, IconLock, IconInfo, IconUser } from './Icones/Icones';

const CONTEUDO_HERO = {
  denuncia: {
    eyebrow: 'Canal Confidencial e Seguro',
    IconeEyebrow: IconShield,
    titulo: 'Sua voz importa. Fale com segurança.',
    subtitulo: 'Registre situações de bullying de forma anônima ou identificada. Todas as denúncias são tratadas com sigilo absoluto pela coordenação.',
    badge: 'Seus dados estão protegidos',
    IconeBadge: IconLock,
  },
  informacoes: {
    eyebrow: 'Conteúdo Educativo',
    IconeEyebrow: IconBook,
    titulo: 'Conheça, reconheça e combata o bullying.',
    subtitulo: 'Aprenda a identificar os tipos de bullying, seus impactos e como agir para criar um ambiente escolar mais seguro para todos.',
    badge: 'Informação é proteção',
    IconeBadge: IconInfo,
  },
  coordenacao: {
    eyebrow: 'Área Restrita',
    IconeEyebrow: IconLock,
    titulo: 'Painel da Coordenação',
    subtitulo: 'Gerencie as denúncias recebidas, acompanhe o status de cada caso e registre os encaminhamentos realizados.',
    badge: 'Acesso somente para coordenação',
    IconeBadge: IconUser,
  },
};

export default function Hero({ aba }) {
  const c = CONTEUDO_HERO[aba] || CONTEUDO_HERO.denuncia;
  return (
    <section className="hero">
      <div className="hero-eyebrow">
        <c.IconeEyebrow size={12} />
        {c.eyebrow}
      </div>
      <h1>{c.titulo}</h1>
      <p>{c.subtitulo}</p>
      <div className="hero-badge">
        <c.IconeBadge size={14} />
        {c.badge}
      </div>
    </section>
  );
}
