import Card from "../../components/items/card/card";
import members from "../../db/ouers";
import './devlop.css';
function Devlop() {
  return (
    <div className="dev-main">
      {
        members.map((le,ii)=>
        {
          
          return(
            
            <div className="card-all"  key={ii}>
            <Card name={le.name }  shortdes={le.shortdes} longdes={le.longdes} perimg={le.perimg} links={le.links}/>
            </div>

          )

        })
          

      }

    
    
   
    </div>
  )
}

export default Devlop;