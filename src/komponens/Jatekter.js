import Elem from "./Elem"
import "./jatekter.css"
export default function Jatekter(props) {
    return (
      <div className="jatekter">
        {props.lista.map((elem, index) => {
          return <Elem ertek={elem} key={index} onClick={() => props.onCellClick(index)} />;
        })}
      </div>
    );
  }
  