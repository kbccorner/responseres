import { Link } from "react-router-dom";
import engarticals from "../../../db/engdb/engarticals";
import { AnimatePresence, motion } from "framer-motion";

import "./dropdown.css";
function DropDown(prop) {
  // window.addEventListener('mousemove',(e)=>{
  //     console.log(e.target);
  // })
  const { title, setToggle, list, toggleId, id,isOpen } = prop;
  const followChange = () => {
    toggleId === id ? setToggle(-1) : setToggle(id);
  };

  return (

    <li className="nav-item dropdown">
      {toggleId === id && (
        <div onClick={() => setToggle(-1)} className="dropdown-overlay"></div>
      )}
      <div className={`nav-link dropdown-toggle  ${(toggleId === id)&&"chosen" }` }onClick={followChange}>
        {title}
        <i className={`fa fa-angle-down  ${(toggleId === id)&&"chosen" }`}></i>
      </div>
      <AnimatePresence>


     
      {toggleId === id && (<motion.div
        key="ew"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        exit={{ scaleY: 0, transition: { duration: 0.5 } }}
        transition={{
          type: "easeOut",

          duration: 0.7,
        }}
       className="dropdown-main"
      
      
      >
       
          <ul className="dropdown-menu">
          {list.map((la) => {
            return (
              <li key={la.name}>
                <Link className="dropdown-item" to={la.to}>
                  <i className="fa fa-archway icon"></i> 
                  <div >
                    <p>
                    {la.name}

                    </p>
                  <p  className='stats'>
                  (حلب-دمشق-حمص-سوريا)

                  </p>
                  </div>
                </Link>
              </li>
            );
          })}

          </ul >
          <ul className="articals">
          <p className="art-ele">مقالات</p>
          {engarticals.map((la) => {
            return (
              <li key={la.title} className="blogs">
                <Link className="dropdown-item" to={la.to}>
                  <i className="photo">
                    <img src={la.mainphoto} alt=""/>
                    </i> 
                  <div className="art-tit">
                    <p>
                    {la.title}

                    </p>
                  <p  className='stats'>
                  {la.shortText}
                  </p>
                  <p  className='readmor'>
                  اقرا المزيد
                  </p>
                  </div>
                </Link>
              </li>
            );
          })}
            

          </ul>
         
       
       
        
        </motion.div>
        
      )}
       </AnimatePresence>
    </li>
  );
}

export default DropDown;
