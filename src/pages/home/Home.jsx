import React from "react";
import MainNavbar from "../../layout/MainNavbar";
import home_style from "./home.style.module.css";
import { useSelector } from "react-redux";

export default function Home() {
  const text = useSelector((state) => state.colorChanging.text);
  const border = useSelector((state) => state.colorChanging.border);
  return (
    <div className={home_style.container}>
      <MainNavbar />
      <div style={{borderColor:border , color:text}}>
        <h1>Homee</h1>
        <span>This Is My Home Page</span>
      </div>
    </div>
  );
}

