import "./footer.css";
import { Link } from "react-router-dom";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import { FiMail } from "react-icons/fi";
const Footer = () => {
  return (
    <section className="container">
      {/* <div className="item">
        <img src="/bg.png" />
      </div> */}
      <div className="item">
        <div className="card">
          <h1 className="title">الكليات</h1>
          <p className="text">
            <Link className="footer-brand" to="/">
              كليات الهندسة
            </Link>
          </p>
          <p className="text">
            <Link className="footer-brand" to="/">
              الكليات الطبية
            </Link>
          </p>
          <p className="text">
            <Link className="footer-brand" to="/">
              المعاهد
            </Link>
          </p>
          <p className="text">
            <Link className="footer-brand" to="/">
              الكليات الادبية
            </Link>
          </p>
        </div>
        <div className="card">
          <h1 className="title">قاعدة المعرفة</h1>
          <p className="text">
            <Link className="footer-brand" to="/">
              الاسئلة الشائعة
            </Link>
          </p>
          <p className="text">
            <Link className="footer-brand" to="/">
              دليل المستخدم
            </Link>
          </p>
          <p className="text">
            <Link className="footer-brand" to="/">
              حول المبادرة
            </Link>
          </p>
          <p className="text">
            <Link className="footer-brand" to="/">
              حول الفريق
            </Link>
          </p>
          <p className="text">
            <Link className="footer-brand" to="/">
              الداعمون
            </Link>
          </p>
        </div>
        <div className="card">
          <h1 className="title">للتواصل</h1>
          <p className="text">
            <Link to="/">Email</Link>
          </p>
          <p className="text">
            <Link to="/">phone</Link>
          </p>
        </div>

        {/* <div className="item">
              <img src="/bg.png" />
            </div> */}

        <div className="card">
          <h1 className="title">الكليات</h1>
         
          <p className="text">
            <Link className="footer-brand" to="/">
              الكليات الطبية
            </Link>
          </p>
          <p className="text">
            <Link className="footer-brand" to="/">
              كليات الهندسة
            </Link>
          </p>
          <p className="text">
            <Link className="footer-brand" to="/">
              المعاهد
            </Link>
          </p>
          <p className="text">
            <Link className="footer-brand" to="/">
              الكليات الادبية
            </Link>
          </p>
        </div>
        <div className="card">
          <h1 className="title">قاعدة المعرفة</h1>
          <p className="text">
            <Link className="footer-brand" to="/">
              الاسئلة الشائعة
            </Link>
          </p>
          <p className="text">
            <Link className="footer-brand" to="/">
              دليل المستخدم
            </Link>
          </p>
          <p className="text">
            <Link className="footer-brand" to="/">
              حول المبادرة
            </Link>
          </p>
          <p className="text">
            <Link className="footer-brand" to="/">
              حول الفريق
            </Link>
          </p>
          <p className="text">
            <Link className="footer-brand" to="/">
              الداعمون
            </Link>
          </p>
        </div>
        <div className="card">
          <h1 className="title">للتواصل</h1>
          <p className="text">
            <Link to="/">Email</Link>
          </p>
          <p className="text">
            <Link to="/">PHone</Link>
          </p>
        </div>
      </div>
      <div className="item">
        <div className="continfo">
          <div className="logo">
            <Link to="/"> <img src="/logo-white.svg" alt="logo"/></Link>
          </div>
          <div className="mail">
            
              <FiMail />
              <Link to="/">
              mmmmmol@gmail.com
            </Link>
          </div>
        </div>
        <div className="continfo">
          <Link to="/">
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
