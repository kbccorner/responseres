import { useParams } from "react-router-dom";
import AboutSection from "./DynSection/About/AboutSection";
import PresentSection from "./DynSection/Present/PresentSection";
import WelcomeSection from "./DynSection/Welcome/WelcomeSection";
import Blogsection from "./DynSection/Blog/blogsection";
import PageData from "./PageData.js";
 import './eng.scss';
 
function Eng() {
  const CollageName = useParams();
   const datas=PageData[CollageName.collage];
  return (
    <main className={`eng ${CollageName.collage}`}>
       
      <WelcomeSection title={datas.title} desc={datas.desc} font={datas.fonts} />
      <AboutSection  />
      
 
      <PresentSection/>
      <Blogsection/>
     
    
    </main>
  );
}

export default Eng;
