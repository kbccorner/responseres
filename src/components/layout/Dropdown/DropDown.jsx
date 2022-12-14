import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import engarticals from "@/db/engdb/engarticals";
import "./dropdown.css";
function DropDown(prop) {
  const getSrc = (src) => {
    return `src/assets/image/${src}`;
  };

  const { title, setToggle, list, route, toggleId, closenav, id, isOpen } =
    prop;
  const followChange = () => {
    toggleId === id ? setToggle(-1) : setToggle(id);
  };

  return (
    <li className="nav-item dropdown">
      {toggleId === id && (
        <div onClick={() => setToggle(-1)} className="dropdown-overlay"></div>
      )}
      <div
        className={`nav-link dropdown-toggle  ${toggleId === id && "chosen"}`}
        onClick={followChange}
      >
        {title}
        <i className={`fa fa-angle-down  ${toggleId === id && "chosen"}`}></i>
      </div>
      <AnimatePresence>
        {toggleId === id && (
          <motion.div
            key="ew"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0, transition: { duration: 0.5 } }}
            transition={{
              type: "easeInOut",
              duration: 0.5,
            }}
            className="dropdown-main"
          >
            <ul className="dropdown-menu">
              {list.map((la, index) => {
                return (
                  <li className="d-li" key={la.name}>
                    <Link
                      onClick={() => {
                        setToggle(-1);
                        closenav();
                      }}
                      className="dropdown-item"
                      to={route + la.to}
                    >
                      <img
                        className="image-icon"
                        src={getSrc(`icons/as${index + 1}.svg`)}
                        alt=""
                      />
                      <div>
                        <p>{la.name}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="articals">
              <p className="art-ele">????????????</p>
              {engarticals.map((la) => {
                return (
                  <li key={la.title} className="blogs">
                    <Link className="dropdown-item" to={la.to}>
                      <i className="photo">
                        <img src={la.mainphoto} alt="" />
                      </i>
                      <div className="art-tit">
                        <p>{la.title}</p>
                        <p className="stats">{la.shortText}</p>
                        <p className="readmor">???????? ????????????</p>
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
