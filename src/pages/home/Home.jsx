import { motion } from "framer-motion";
import "./Home.scss";
import datalist from "../../components/shared/Dropdown/Dropdata";
import { Link } from "react-router-dom";
import articleimg from "@@/image/articls.svg";
import Card from "../../components/shared/Card/Card";

function Home() {
  return (
    <div className="home">
      <div className="mainhome home_container">
        <div className="main-title">
          <div className="knowlege">
            <motion.h1
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                delay: 0.8,
                duration: 1.5,
                bounce: 0,
              }}
            >
              knowlege bace <br />
              corner
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              delay: 1.8,
              duration: 1,
              bounce: 0,
            }}
            className="knowlege-des"
          >
            مبادرة تستهدف طلاب الجامعات من الاختصاصات كافة
          </motion.div>
        </div>
        <div className="clod1"></div>
        <div className="clod2"></div>
        <div className="main-city"></div>
        <div className="main-city-back"></div>
      </div>

      <section className="collages_home">
        <div className="collages_major">
          <div className="collages_title">
            <h1>الاختصاصات</h1>
          </div>
          <div className="collages_cards">
            {datalist.map((la, index) => {
              return <Card data={la} key={index}></Card>;
            })}
          </div>
        </div>
      </section>
      <ul className="anthersection">
        <div className="coleg-tit">الجامعات السورية الحكومية و الخاصة</div>
        <li className="uner">
          <Link to="/">جامعة حلب</Link>
        </li>
        <li className="uner">
          <Link to="/">جامعة دمشق</Link>
        </li>
        <li className="uner">
          <Link to="/">جامعة تشرين</Link>
        </li>
        <li className="uner">
          <Link to="/">جامعة البعث</Link>
        </li>
        <li className="uner">
          <Link to="/">جامعة حلب</Link>
        </li>
        <li className="uner">
          <Link to="/">جامعة دمشق</Link>
        </li>
        <li className="uner">
          <Link to="/">جامعة تشرين</Link>
        </li>
        <li className="uner">
          <Link to="/">جامعة البعث</Link>
        </li>

        <div className="contry"></div>
      </ul>
      <section className="introhome">
        <div className="typing">
          <div className="introtitle">بنك المشاريع</div>
          <div className="introtste">
            بنك المشاريع خدمة من الخدمات بلل يلي بلا نحن بلا لازم بلا بلا لانو
            بلا بلا الجامعات شي نص اي شرح بنك المشاريع خدمة من الخدمات بلل يلي
            بلا نحن بلا لازم بلا بلا لانو بلا بلا الجامعات شي نص اي شرح لازم
            يكون في هيك خدمة لاني ذهب السورية الخاصة
          </div>
          <div className="introlink">
            <Link to="/">الذهاب للخدمة</Link>
          </div>
        </div>
        <div className="pictuers">
          <img src={articleimg} alt="articals" />
        </div>
      </section>
    </div>
  );
}

export default Home;
