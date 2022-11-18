import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ data }) {
  return (
    <Link to={data.mroute} className="collage_card_link">
      <div className="collage_card_list"> </div>
      <div className="collage_card_title">
        <h1>{data.title}</h1>
      </div>
    </Link>
  );
}

export default Card;
