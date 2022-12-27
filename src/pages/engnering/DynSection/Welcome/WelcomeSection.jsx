import bg from "@/assets/Engineering/It/rer.svg";

function WelcomeSection({ title, desc,font }) {
  console.log(font);
  return (
    
 
      <div className="welcome-head">
        <div className="welcome-head_container">
          <h1>{title}</h1>

          <h5>{desc}</h5>
        </div>
        <i className={font[0]} style={{ top: "40%", left: "10%" }}></i>
        <i
          className={font[1]}
          style={{ top: "20%", left: "60%" }}
        ></i>
        <i
          className={font[2]}
          style={{ top: "80%", left: "30%" }}
        ></i>
        <i className={font[3]} style={{ top: "70%", left: "80%" }}></i>
    
          
        
      </div>
 
  );
}

export default WelcomeSection;
