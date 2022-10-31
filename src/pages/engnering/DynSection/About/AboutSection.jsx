import "./AboutSection.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination]);

import g1 from "@/assets/Engineering/It/it-bg.jpg";
import g2 from "@/assets/Engineering/It/mainbackground.jpg";
function AboutSection() {
  return (
    <section className="about-collage">
      <div className="container">
        <h3 className="title">
          <i className="fa-solid fa-lightbulb"></i> نبذة عن الكلية
        </h3>

        <div className="parag">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت
          تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
          الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
          العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من
          الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
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
                slidesPerView: 2,
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
    </section>
  );
}

export default AboutSection;
