export default function Die(props) {
  return (
    <div className="die">
      <div
        className="die-container"
        style={{
          backgroundColor: props.isHeld ? "#e84a5f" : "white",
          color: props.isHeld ? "white" : "black",
        }}
        onClick={props.holdDice}
      >
        {props.die}
      </div>
    </div>
  );
}
