import React from 'react'
import engarticals from '../../../../db/engdb/engarticals';
import "./blogsection.scss"
import { Link } from 'react-router-dom';
function Blogsection() {
  return (
    <div className='eng-blogs'>
         <ul className="articalss">
          <p className="art-ele">مقالات</p>
          {engarticals.map((la) => {
            return (
              <li key={la.title} className="blogs">
                <Link className="dropdown-item" to={la.to}>
                  <i className="photo">
                    <img src={la.mainphoto} alt=""/>
                    </i> 
                  <div className="art-tit">
                    <p>
                    {la.title}

                    </p>
                  <p  className='stats'>
                  {la.shortText}
                  </p>
                  <p  className='readmor'>
                  اقرا المزيد
                  </p>
                  </div>
                </Link>
              </li>
            );
          })}
            

          </ul>
      
    </div>
  )
}

export default Blogsection
