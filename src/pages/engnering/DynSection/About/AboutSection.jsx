import "./AboutSection.scss";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Link } from "react-router-dom";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
 

SwiperCore.use([EffectCoverflow, Pagination]);

import g1 from "@/assets/Engineering/It/it-bg.jpg";
import g2 from "@/assets/Engineering/It/mainbackground.jpg";
function AboutSection() {
  return (
    <div className="about-collage">
      <div className="about-container">
       <div className="caption">
       <h2 className="titleabout">
          <i className="fa-solid fa-lightbulb"></i> نبذة عن الكلية
        </h2>

        <div className="parag">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت
          تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
          الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
          العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من
          الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
          <Link  to="" className="read-more">
           <span> اقرأ المزيد </span>
            <i className="fa fa-arrow-left"></i>
          </Link>
        </div>
       </div>
        <div className="gallery">
          <Swiper
            grabCursor={true}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={g1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={g2} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    
    </div>
  );
}

export default AboutSection;
