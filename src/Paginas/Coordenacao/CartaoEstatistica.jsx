export default function CartaoEstatistica({ valor, label, cor }) {
  return (
    <div className="stat-card">
      <div className="stat-value" style={cor ? { color: cor } : {}}>{valor}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
