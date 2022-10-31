import { Route,BrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Help from "./pages/help/helpcenter";
import Devlop from "./pages/dewvelpers/Devlop";

function App() {
  return (
    <div className="App"  >
      <Layout>
   
        <Route path="/" exact>
         <Home/>
        </Route>
        <Route path="/dev" >
          <Devlop />
        </Route>
        <Route path="/help" >
          <Help />
        </Route>
        <Route path="/about" >
          <About />
        </Route>
        
      </Layout>
    </div>
  );
}

export default App;
