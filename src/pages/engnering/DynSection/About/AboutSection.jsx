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
            <i className="fa-solid fa-lightbulb"></i> نبذة عن الكلية
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
          <Swiper
            dir="rtl"
            modules={[EffectCreative, Pagination]}
            grabCursor={true}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, 400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={g1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={g2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={g1} alt="" />
            </SwiperSlide>
          </Swiper>
          {/* <button type="button">i.fa.fa-</button>
          <button type="button"></button> */}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
