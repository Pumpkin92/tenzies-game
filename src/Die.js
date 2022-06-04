export default function Die(props) {
  let id = props.id;
  return (
    <div className="die">
      <div
        className="die-container"
        style={{
          backgroundColor: props.isHeld ? "#e84a5f" : "white",
          color: props.isHeld ? "white" : "black",
        }}
        onClick={props.holdDice}
        // onClick={() => {
        //   props.holdDice(id);
        // }}
      >
        {props.die}
      </div>
    </div>
  );
}
