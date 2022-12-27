import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { Divide as Hamburger } from "hamburger-react";
import DropDown from "../Dropdown/DropDown";
import datalist from "../Dropdown/Dropdata";
function Navbar() {
  const [isFoucs, setIsFoucs] = useState(false);
  const [toggle, setToggle] = useState(-1);
  const [isOpen, setOpen] = useState(false);
  const respon=()=>{
    setOpen(false)
  }
  return (
    <nav className="navbar flex flex-items-center  ">
      <a className="navbar-brand" href="/"   >
        <img src="/logo-white.svg" alt="logo"/>
      </a>
      {isOpen && <div onClick={()=>setOpen(!isOpen)} className="navbar-overlay">

      </div>}  

     <div className="navbar-toggler">
     <Hamburger  toggled={isOpen} toggle={setOpen} />
     </div>

      <ul className={`navbar-nav ${isOpen && "active"} flex flex-items-center`}>
        <li className={`nav-item ${toggle===222&&'selected'}`}>
          <Link className={`nav-link active hover `} to="/"  onClick={()=>{setToggle(222);setOpen(!isOpen)}}>
            الصفحة الرئيسية
          </Link>
        </li>

        {datalist.map((drop, index) => {
          return (
            <DropDown
              key={drop.title}
              id={index}
              closenav={respon}
              route={drop.mroute}
              setToggle={setToggle}
              toggleId={toggle}
              title={drop.title}
              list={drop.list}
              isOpen={isOpen}
            />
          );
        })}

        <li className={`nav-item ${(toggle==111)&&'selected'}`}>
          <Link className="nav-link active hover"  to="/help"  onClick={()=>{setToggle(111)}}>
            دليل المستخدم 
          </Link>
        </li>
        <li className={`nav-item ${(toggle==111)&&'selected'}`}>
          <Link className="nav-link active hover"  to="/about"  onClick={()=>{setToggle(111)}}>
           حول الفريق
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
