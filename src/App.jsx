import { Route,Redirect } from "react-router-dom";
import Layout from "./components/layout";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Eng from "./pages/engnering/Eng";

import Help from "./pages/help/helpcenter";
import Devlop from "./pages/dewvelpers/Devlop";

function App() {
  return (
    <div className="App"  >
      <Layout>
   
     
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/eng/:collage">
          <Eng />
        </Route>
        <Route path="/dev" >
          <Devlop />
        </Route>
        <Route path="/help"  >
          <Help />
        </Route>
        <Route path="/about" >
          <About />
        </Route>
         <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        
      </Layout>
    </div>
  );
}

export default App;
