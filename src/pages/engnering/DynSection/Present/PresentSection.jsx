import "./PresentSection.css";
import v1 from "@/assets/Engineering/It/video.mp4";
import pls from "@/assets/Engineering/It/cover.png";
function PresentSection() {
  return (
    <section className="man-present">
      <div className="container">
        <div className="row flex">
          <div className="col">
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          </div>
          <div className="col">
            <video placeholder={pls} src={v1} controls></video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PresentSection;
