import  "./footer.css";
import { Link } from "react-router-dom";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import { FiMail } from "react-icons/fi";
const Footer = () => {
  return (
    <section className="container">
      <div className="item">
        <div className="continfo">
          <div className="logo">
            <a href="/home">
              <img className="logo-white" src="/logo-white.svg" alt="logo" />
            </a>
          </div>
          <div className="mail">
         
          
          </div>
        </div>
        <div className="item">
          <div className="card">
            <h1 className="title">قاعدة المعرفة</h1>
            <div className="links">
            <span className="text">
              <Link className="footer-brand" to="/about">
                الرؤية المستقبلية
              </Link>
            </span>
            <span className="text">
              <Link className="footer-brand" to="/help">
                دليل المستخدم
              </Link>
            </span>
            <span className="text">
              <Link className="footer-brand" to="/">
                حول المبادرة
              </Link>
            </span>
            <span className="text">
              <Link className="footer-brand" to="/dev">
                حول الفريق
              </Link>
            </span>
            <span className="text">
              <Link className="footer-brand" to="/supp">
                الداعمون
              </Link>
            </span>
            </div>
          </div>
        </div>
        <div className="continfo">
          <Link to="tel:055">
          <FiMail className="icons"/>
          </Link>
          <Link to="tel:055">
            <FiFacebook className="icons" />
          </Link>
          <Link to="/">
            <FiInstagram className="icons" />
          </Link>

          <Link to="/">
            <FiLinkedin className="icons" />
          </Link>

          <Link to="/about">
            <TbBrandGithub className="icons" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
