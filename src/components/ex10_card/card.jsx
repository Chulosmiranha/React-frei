import "./card.scss";

export function Card({ altura, peso, situa, onDelete }) {
  return (
    <div className="card1">
      <div className="info">
        Altura: {altura} | Peso: {peso} | Situação: {situa}
      </div>
      <button className="delete-button" onClick={onDelete}>APAGAR</button>
    </div>
  );
}
