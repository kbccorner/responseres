import React from 'react'
import './item3.css'
function Item3(props) {
  const { title, icon } = props;
  return (
    <div className="item3-cont">
      <div className="item3-ic">
        <li className={`${icon} `}></li>
      </div>
      <div className="item3-txt">
        <p className="item3-tit">{title}</p>
      </div>
    </div>
  );
}

export default Item3