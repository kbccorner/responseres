import { Link } from "react-router-dom";
 

import "./Card.scss";

function Card({title,route}) {
  return (
    <Link  to={route} className="collage_card_link">
      <div  className="collage_card_icon">
        
      </div>
      <div className="collage_card_title">
        <h1>{ title}</h1>
      </div>
    </Link>
  );
}

export default Card;
