import { useRef } from "react";
import "./PresentSection.scss";
import v1 from "@/assets/Engineering/It/video.mp4";
import pls from "@/assets/Engineering/It/cover.png";
import vidioframe from "@/assets/Engineering/It/time-machine-playback.svg"
function PresentSection() {
  const ghgh=useRef();
  const handelvidio=()=>{
      ghgh.current.style.display="block";
      ghgh.current.requestFullscreen();
  }
  return (
    <section className="man-present">
      <div className="pres-counntiners">
        <div className="pres ">
          <div className="pres-txt">
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          </div>
          <div className="pres-ved">
            <img src={vidioframe} alt="vidio"/>
            <div className="black-screen" onClick={handelvidio}>
            <i className="far fa-play-circle"></i>

            </div>
            <video placeholder={pls} src={v1}  ref={ghgh}></video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PresentSection;
