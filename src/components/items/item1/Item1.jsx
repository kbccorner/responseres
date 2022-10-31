import React from "react";
import "./Item1.css";
function Item1(props) {
  const { title, icon } = props;
  return (
    <div className="item1-cont">
      <div className="item1-ic">
        <li className={`${icon} `}></li>
      </div>
      <div className="item1-txt">
        <p className="item1-tit">{title}</p>
      </div>
    </div>
  );
}

export default Item1;
