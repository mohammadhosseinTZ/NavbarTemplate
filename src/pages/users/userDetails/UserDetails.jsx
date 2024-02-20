
import { useParams } from 'react-router-dom'
import userDetails_style from "./userDetails.style.module.css"
import MainNavbar from "../../../layout/MainNavbar"
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
export default function UserDetails() {
    const {userName} = useParams();
    const [user , setUser] = useState([])
    useEffect(()=>{
        fetch(`https://www.melivecode.com/api/users?search=${userName}`)
        .then((res)=>res.json())
        .then((data)=>setUser(data[0]))
    },[])
    const text = useSelector((state) => state.colorChanging.text);
  const border = useSelector((state) => state.colorChanging.border);
  return (
    <div className={userDetails_style.container}>
        <MainNavbar />
        <div style={{color:text , borderColor:border}}>
            <img src={user.avatar} alt="" width={150}/>
            <span>NAME :{user.fname}</span>
            <span>LAST NAME:{user.lname}</span>
        </div>
    </div>
  )
}
