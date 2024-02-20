import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

export default function MainNavbar() {
  
  const text = useSelector((state) => state.colorChanging.text);
  const border = useSelector((state) => state.colorChanging.border);
  return (
    <div>
        <div>
            <nav style={{width:200 }}>
                <ul style={{width:"100%" , listStyle:"none" , margin :0 }}>
                    <li style={{border:"1px solid gray" , marginBottom:8 , padding:15 , borderColor:border }}><Link to={"/"}style={{ color:text}}>Home</Link></li>
                    <li style={{border:"1px solid gray" , marginBottom:8 , padding:15 , borderColor:border }}><Link to={"/About"}style={{ color:text}}>About</Link></li>
                    <li style={{border:"1px solid gray" ,marginBottom:8, padding:15 , borderColor:border }}><Link to={"/Users"}style={{ color:text}}>Users</Link></li>
                    <li style={{border:"1px solid gray" , padding:15 , borderColor:border }}><Link to={"/Options"}style={{ color:text}}>Options</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
