import { useRef } from "react";
import "./PresentSection.scss";
import noac from "@/assets/Engineering/It/no-amico.svg";
import avatarvideo from "@/assets/Engineering/It/videon.svg";
function PresentSection() {
  return (
    <section className="man-present">
      <div className="pres-counntiners">
        <div className="pres ">
          <div className="pres-text">
            <p>
              
              النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
              من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
            </p>
            <button className="btn btn-watch" type="button">
               شاهد الفيديو  <i class="fa fa-play-circle"></i> 
            </button>
          </div>

          <div className="pres-ved">
            <div className="pres-container">
              <img src={avatarvideo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PresentSection;
