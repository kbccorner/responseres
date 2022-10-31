import React from 'react'
import "./Item2.css"
function Item2(props) {
    const {title,icon,text}=props;
  return (
    <div className="item-cont">
        <li className={`${icon} item-ic`}></li>
        <div className='item-txt'>
            <p className='item-tit'>{title}</p>
            <p className='item-txtsm'>{text}</p>
        </div>
        

    </div>
  )
}

export default Item2