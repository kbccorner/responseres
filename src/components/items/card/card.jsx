
import "./card.scss";
import { Link } from "react-router-dom";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import { FiMail } from "react-icons/fi";

function Card({ name, shortdes,longdes,perimg,links}) {

  console.log(name);
 
  return (
   
    <div className="cardss">
      <div className="img-card">
        <img src={perimg} alt=""/>


      </div>
      <div className="card-des">
        
        <h1>{name}
          
        </h1>
        <h3>{shortdes}</h3>
        
        <p>{
          longdes}</p>

      </div>
      <div className="card-cont">
      <div className="continfo">
          <Link to={links["f"]}>
            <FiFacebook className="icons" />
          </Link>
          <Link to={links["i"]}>
            <FiInstagram className="icons" />
          </Link>

          <Link to={links["l"]}>
            <FiLinkedin className="icons" />
          </Link>

          <Link to={links["g"]}>
            <TbBrandGithub className="icons" />
          </Link>
        </div>

      </div>


    </div>
  );
}

export default Card;
