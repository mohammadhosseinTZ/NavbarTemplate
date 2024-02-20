import React from "react";
import MainNavbar from "../../layout/MainNavbar";
import about_style from "./about.style..module.css"
import { useSelector } from "react-redux";
export default function About() {
  const text = useSelector((state) => state.colorChanging.text);
  const border = useSelector((state) => state.colorChanging.border);
  return (
    <div className={about_style.container}>
      <MainNavbar />
      <div style={{borderColor:border , color : text}}>
        <h1>About</h1>
        <span>This Is My About Page</span>
      </div>
    </div>
  );
}
