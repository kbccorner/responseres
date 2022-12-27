import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@/components/shared/Card/Card";
import goal from "@@/image/goalg.svg";
 
import homedata from "@/db/homedata/homedb";
import "./Home.scss";
import datalist from "../../components/layout/Dropdown/Dropdata";
import CountryMap from "../../components/layout/countrymap/CountryMap";

import { Navigation, EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

function Home() {
  const [swiperr, setSwiper] = useState(null);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const slideTo = (index) => swiperr.slideTo(index);
  const changePosition = () => {
    if (swiperr) {
      setSwiperIndex(swiperr.realIndex);
      console.log(swiperr.realIndex);
    }
  };
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
        <img className="fluid" src={goal} />
        <div className="main-city"></div>
        <div className="main-city-back"></div>
      </div>

      <section className="collages_home">
        <div className="collages_major">
          <div className="collages_title">
            <h2>الاختصاصات</h2>
          </div>
          <div className="collages_cards">
            {homedata.map((da, index) => {
              return <Card key={index} title={da.title} route={da.mroute} />;
            })}
          </div>
        </div>
        <section className="university">
          <div className="university_title">
            <h2> ابرز الجامعات السورية الحكومية و الخاصة</h2>
          </div>
          <div className="university_show">
            <div className="university_show_titles">
              <Swiper
                onSwiper={setSwiper}
                onSlideChange={changePosition}
                spaceBetween={50}
                navigation={true}
                effect={"coverflow"}
                grabCursor={true}
                slidesPerView={1} 
                centeredSlides={true}
                loop={true}
                 
                coverflowEffect={{
                  rotate: -20,
                  stretch: 0,
                  depth: 10,
                  modifier: 1,
                  slideShadows: false,
                }}
                modules={[EffectCoverflow, Navigation]}
              >
                {datalist[0].list.slice(0,5).map((un, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="university-grid-col">
                        <div className="media">
                          <div className="media-left">
                            <img src={un.src} className="media-object" />
                          </div>
                          <div className="media-body">
                            <h4>{un.title} </h4>
                            <p className="meta-data">
                              <span>{un.type}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="university_show_location">
              <CountryMap index={0} />
            </div>
          </div>
        </section>
      </section>
      <section className="intro_home">
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
          <img src="src/assets/image/articls.svg" alt="articals" />
        </div>
      </section>
    </div>
  );
}
/*

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
<div id="scholar_result">
                            <div id="ajaxRequestContent">
                                                            <div className="row">
                <div className="col-md-4 university-grid-col">
            <a href="/universities/show/tishreen_university">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/logo07b2c6acdd662c8f12538c5dd74d6df3.png" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة تشرين
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            حكومية
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/damascus_university">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/90e5977bff4ace25854868fe677f023c.png" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة دمشق
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            حكومية
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/higher_institute_for_applied_sciences_and_technology">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/ca7634581729726f18959e7975482fad.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                المعهد العالي للعلوم التطبيقية والتكنولوجيا
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            حكومية
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                    </div>
                                                    <div className="row">
                <div className="col-md-4 university-grid-col">
            <a href="/universities/show/a%D9%90l_baath_university">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/196994fa40d6d62548fb5eb160ed6d70.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة البعث
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            حكومية
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/university_of_aleppo">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/logo0a07a3b96db8497a30367e7020988234.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة حلب
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            حكومية
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/syrian_international_university_for_science_and_technology">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/51333b411708884d3b84378a7dd0846c.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                الجامعة السورية الخاصة
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                    </div>
                                                    <div className="row">
                <div className="col-md-4 university-grid-col">
            <a href="/universities/show/al_andalus_university_for_medical_sciences">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/a33c323eabe04913f647618cef7b635d.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة الأندلس للعلوم الطبية
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/alhawash_private_university">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/6ee80699edbe22dd44a582e4673e9da0.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة الحواش الخاصة
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/mamoun_private_university_for_science_and_technology">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/cf0d59ef7b7426a7c1d10d15111f1813.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة المأمون الخاصة
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                    </div>
                                                    <div className="row">
                <div className="col-md-4 university-grid-col">
            <a href="/universities/show/qasyoun_private_university_for_science_and_technology">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/31bc83745e11b0cee4c2118479bfa5b3.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة قاسيون الخاصة للعلوم والتكنولوجيا
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/al_rasheed_international_university_for_science_%26_technology">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/9282fa2c7f01307119636a9b7e199150.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة الرشيد الدولية الخاصة للعلوم والتكنولوجيا
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/al_etihad_university">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/b093137bd6e8888ca95739ea4a59b2b1.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة الإتحاد الخاصة
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                    </div>
                                                    <div className="row">
                <div className="col-md-4 university-grid-col">
            <a href="/universities/show/higher_institute_of_business_administration">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/51497d41871dc06d8b078a19a77cee2c.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                المعهد العالي لإدارة الأعمال
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            حكومية
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/institut_national_d%27administration">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/c203aaa29235974fc7962a1f5861f8ee.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                المعهد الوطني للإدارة العامة
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            حكومية
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/higher_institute_for_demographic_studies_and_researches">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/d0af27b563cf854a311e999266a49a1f.png" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                المعهد العالي للدراسات والبحوث السكانية
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            حكومية
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                    </div>
                                                    <div className="row">
                <div className="col-md-4 university-grid-col">
            <a href="/universities/show/syrian_virtual_university">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/15342856bfb34cf575dfd1a1cc6e70bf.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                الجامعة الافتراضية السورية
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            حكومية
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/hama_university">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/d8f45281d5341d27970890b9ca386edf.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة حماه
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            حكومية
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/kalamoon_private_university">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/b64068c8334a2ef7e2d0b097105bd8d7.png" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة القلمون الخاصة
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                    </div>
                                                    <div className="row">
                <div className="col-md-4 university-grid-col">
            <a href="/universities/show/cordoba_private_university">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/f4595807eb9aaf41d77e71fb9669adc8.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة قرطبة الخاصة
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/arab_international_university">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/19e2796ced4bcf4335587621a24f7960.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                الجامعة العربية الدولية الخاصة
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/international_university_for_science_and_technology">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/8b6f67be5bbbdd6d969f765b6273e8a6.png" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                الجامعة الدولية الخاصة للعلوم والتكنولوجيا
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                    </div>
                                                    <div className="row">
                <div className="col-md-4 university-grid-col">
            <a href="/universities/show/sham_private_university">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/fbab3743b52e2d0696b92ec1ab1b7c75.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة الشام الخاصة
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/peninsula_private_university">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/29bbc19038bfb619a9bf528a7bfa6c34.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة الجزيرة الخاصة
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/wadi_international_university">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/813eda09a7b009ab4029f89f320b104b.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة الوادي الدولية الخاصة
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                    </div>
                                                    <div className="row">
                <div className="col-md-4 university-grid-col">
            <a href="/universities/show/ebla_private_university">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/b9d3431c945949373a9d016696ac877a.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة إيبلا الخاصة
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/alshahba_private_university">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/ab3e5600950b28205816d737c900b06e.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة الشھباء الخاصة
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/yarmouk_private_university">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/ac3c505f7d75b18f869dca198b6121a4.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة اليرموك الخاصة
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                    </div>
                                                    <div className="row">
                <div className="col-md-4 university-grid-col">
            <a href="/universities/show/private_arab_university_of_science_and_technology">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/953582b64ee96132f321480ddb1d4830.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                الجامعة العربية الخاصة للعلوم والتكنولوجيا
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/arab_academy_for_science_and_technology_and_maritime_transport">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/6c756439d84b3fd2cce7351014e9ab23.png" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                    <div className="col-md-4 university-grid-col">
            <a href="/universities/show/sham_higher_institute_of_forensic_sciences_and_the_arabic_language_and_islamic_studies_and_research">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/99cb9b48fbea8d6745b9ed95d62f17a9.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                معھد الشام العالي للعلوم الشرعية واللغة العربية والدراسات والبحوث الإسلامية
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            خاصة
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                    </div>
                                                    <div className="row">
                <div className="col-md-4 university-grid-col">
            <a href="/universities/show/tartous_university">
                <div className="card">
                    <div className="media">
                        <div className="media-left">
                                                                                                                                                                                                                    <img src="/uploads/publishers/71a030f1b1d88d754720a719a2bac9a5.jpeg" className="media-object">
                        </div>
                        <div className="media-body">
                            <h4 className="">
                                جامعة طرطوس
                            </h4>
                            <p className="meta-data">
                                                                                                            <span>
                                            جامعة
                                                                                            حكومية
                                                                                    </span>
                                                                                                </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
                                </div>
                                </div>
                        </div>
*/
export default Home;
