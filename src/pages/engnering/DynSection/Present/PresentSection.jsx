import { useRef } from "react";
import "./PresentSection.scss";
import v1 from "@/assets/Engineering/It/video.mp4";
import pls from "@/assets/Engineering/It/cover.png";
import noac from "@/assets/Engineering/It/no-amico.svg"
function PresentSection() {
 
  return ( 
    <section className="man-present">
      <div className="pres-counntiners">
        <div className="pres ">
          <div className="pres-txt">
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى <br/>زيادة عدد الحروف التى يولدها التطبيق.
          </div>
          <div className="pres-ved">
            <img   src={noac} alt="vidio"/>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default PresentSection;
