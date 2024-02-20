import React from "react";
import MainNavbar from "../../layout/MainNavbar";
import optionsStyle from "./optionsStyle.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  backgroundColor,
  borderColor,
  textColor,
} from "../../store/slice/colorChangingSlice";
import ColorChoosing from "./ColorChoosing";
import AddThemColor from "./AddThemColor";

export default function Options() {
  const text = useSelector((state) => state.colorChanging.text);
  const border = useSelector((state) => state.colorChanging.border);
  const background = useSelector((state) => state.colorChanging.background);
  

  return (
    <div className={optionsStyle.container}>
      <MainNavbar />
      <div style={{ borderColor: border, color: text }}>
        <h1>options</h1>
        <span>This Is My options Page</span>
        
        <ColorChoosing/>
        <AddThemColor/>
      </div>
    </div>
  );
}
