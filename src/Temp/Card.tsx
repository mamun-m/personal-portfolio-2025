import { ElementType } from "react";
import "./card.css";
type Props = {
  head: string;
  text1: string;
  text2: string;
  Icon?: ElementType;
};

function Card({ Icon, head, text1, text2 }: Props) {
  return (
    <div className="card-container">
      {Icon && (
        <i className="icon-sizes">
          <Icon />
        </i>
      )}
      <h3 id="head">{head}</h3>
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
}

export default Card;
