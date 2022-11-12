import React from 'react'
import './blog.scss'
import { useParams } from "react-router-dom";

import articals from '../../db/engdb/articals'
function Bloger() {
    const bloggeName = useParams();
    console.log(bloggeName.blog);
    const datas= articals[bloggeName.blog];
  return (
    <div className='articlsre'>
        <h1>{datas.title}</h1>
        <h5>الاختصاص المستهدف: {datas.type}</h5>
        <div className='father-artc'>
            {
                datas.pargraph.map((la)=>
                {
                    return (
                        <p>
                              <div className='sony'>
                            <h2>
                                {la.title}
                            </h2>
                          
                                {la.text}
                            </div>
                            <div className='par-img'>
                                <img src={la.photo} alt=" "  />

                            </div>
                            

                        </p>
                    )
                })
            }
            </div>
   
            
         

    </div>
  )
}

export default Bloger
