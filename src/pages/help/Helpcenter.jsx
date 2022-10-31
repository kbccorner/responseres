import "./helpcenter.css";
import { motion } from "framer-motion";
import Item2 from "../../components/items/item2/Item2";
import Item1 from "../../components/items/item1/Item1";
import { contentItem2 } from "./contenthelp";
import { contentItem1 } from "./contenthelp";
import { contentItem3 } from "./contenthelp";
import Item3 from "../../components/items/item3/Item3";
function Help() {
  return (
    <div className="container">
      <section className="mainsection">
        <motion.div
          className="help__header"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <img src="/help-en.svg" alt="" />
        </motion.div>
      </section>
      <section className="manuection">
        <div className="articalsection">
          {contentItem2.map((la, index) => {
            return (
              <div key={index} className="aa">
                <Item2 title={la.title} icon={la.icon} text={la.text} />
              </div>
            );
          })}
        </div>
        <div className="contactsection">
          <div className="titlei1">مقالاتنا الاخرى</div>
          <div className="data">
            {contentItem1.map((la, index) => {
              return (
                <div key={index} className="aa">
                  <Item1 title={la.title} icon={la.icon} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="contactsection">
          <div className="titlei1"> الروابط</div>
          <div className="data3">
            {contentItem3.map((la, index) => {
              return (
                <div key={index} className="aa">
                  <Item3 title={la.title} icon={la.icon} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Help;
