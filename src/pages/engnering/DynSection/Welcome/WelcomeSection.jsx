
function WelcomeSection({title,desc}) {
  return (
    <section className="welcome-head">
      <h1>{title}</h1>

      <h5>{desc}</h5>

      <div className="icon-list">
        <i className="fa  fa-code"></i>
        <i className="fa fa-laptop-code"></i>
        <i className="fa fa-code-branch"></i>
        <i className="fa fa-brain"></i>
      </div>
       

    </section> 
  );
}

export default WelcomeSection;
