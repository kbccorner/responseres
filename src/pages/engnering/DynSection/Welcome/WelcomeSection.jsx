import bg from "@/assets/Engineering/It/itee.svg";

function WelcomeSection({ title, desc }) {
  return (
 
      <div className="welcome-head">
        <div className="welcome-head_container">
          <h1>{title}</h1>

          <h5>{desc}</h5>
        </div>
        <i className="fa  fa-code" style={{ top: "40%", left: "10%" }}></i>
        <i
          className="fa fa-laptop-code"
          style={{ top: "20%", left: "60%" }}
        ></i>
        <i
          className="fa fa-code-branch"
          style={{ top: "80%", left: "30%" }}
        ></i>
        <i className="fa fa-brain" style={{ top: "70%", left: "80%" }}></i>
    
          <img src={bg} alt="" />
        
      </div>
 
  );
}

export default WelcomeSection;
