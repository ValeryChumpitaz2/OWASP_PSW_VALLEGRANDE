function AttackSimulator({
  attack,
  impact,
  secure,
  onToggle,
}) {
  return (
    <div className="simulator">
      <h3>Ataque Simulado</h3>

      <code>{attack}</code>

      <p>{impact}</p>

      <button onClick={onToggle}>
        {secure
          ? "Mostrar Vulnerabilidad"
          : "Aplicar Corrección"}
      </button>
    </div>
  );
}
 
export default AttackSimulator;