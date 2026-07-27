export default function CampoDenuncia({ label, value }) {
  if (!value) return null;
  return (
    <div className="denuncia-field">
      <div className="denuncia-field-label">{label}</div>
      <div className="denuncia-field-value">{value}</div>
    </div>
  );
}
