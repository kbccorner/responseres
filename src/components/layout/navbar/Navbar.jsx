import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "@@/image/logo-white.svg"
import { Divide as Hamburger } from "hamburger-react";
import DropDown from "../../shared/Dropdown/DropDown";
import datalist from "../../shared/Dropdown/Dropdata.js";
function Navbar() {
  const [isFoucs, setIsFoucs] = useState(false);
  const [toggle, setToggle] = useState(-1);
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar flex flex-items-center  ">
      <Link className="navbar-brand" to="/" onClick={()=>{setToggle(-1)}}>
        <img src={logo} alt="logo"/>
      </Link>
      {isOpen && <div onClick={()=>setOpen(!isOpen)} className="navbar-overlay">

      </div>}  

     <div className="navbar-toggler">
     <Hamburger  toggled={isOpen} toggle={setOpen} />
     </div>

      <ul className={`navbar-nav ${isOpen && "active"} flex flex-items-center`}>
        <li className={`nav-item ${toggle===222&&'selected'}`}>
          <Link className={`nav-link active hover `} to="/"  onClick={()=>{setToggle(222)}}>
            الصفحة الرئيسية
          </Link>
        </li>

        {datalist.map((drop, index) => {
          return (
            <DropDown
              key={drop.title}
              id={index}
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
          <Link className="nav-link active hover"  to="/about"  onClick={()=>{setToggle(111)}}>
            حول الفريق
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
