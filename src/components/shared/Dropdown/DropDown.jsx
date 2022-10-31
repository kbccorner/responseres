import { Link } from "react-router-dom";
import engarticals from "../../../db/engdb/engarticals";
import { motion } from "framer-motion";

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
      {toggleId === id && (<motion.div
          initial={{y: isOpen? 0 :-1500,
            x: isOpen? -1000 :0

          
          }}
       animate={{ y:0,
        x:0
       }}
       transition={{
         type: "spring",
         stiffness: 200,
         damping: 50
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
    </li>
  );
}

export default DropDown;
