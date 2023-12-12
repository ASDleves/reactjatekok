export default function Elem(props) {
    return (
      <div className="elem" onClick={props.onClick}>
        <p>{props.ertek}</p>
      </div>
    );
  }