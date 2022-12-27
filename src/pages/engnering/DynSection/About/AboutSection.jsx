import "./AboutSection.scss";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { EffectCreative, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import g1 from "@/assets/Engineering/It/sw2.png";
import g2 from "@/assets/Engineering/It/sw1.jpg";
function AboutSection() {
  return (
    <div className="about-collage">
      <div className="about-container">
        <div className="caption">
          <h2 className="title-about">
             نبذة عن الكلية
          </h2>
 
          <div className="parag">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا
            كنت الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد
            النص الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
            <Link to="/home" className="read-more">
              اقرأ المزيد
              <i className="fa fa-arrow-left"></i>
            </Link>
          </div>
        </div>
        <div className="gallery">
       <img src={g1} alt="" />
      
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
