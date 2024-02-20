import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { backgroundColor, borderColor, textColor } from "../../store/slice/colorChangingSlice";

export default function ColorChoosing() {
  const text = useSelector((state) => state.colorChanging.text);
  const border = useSelector((state) => state.colorChanging.border);
  const background = useSelector((state) => state.colorChanging.background);
  const dispatch = useDispatch();
  return (
    <div>
      <span>
        choose your text color{" "}
        <input
          type="color"
          value={text}
          onChange={(e) => dispatch(textColor(e.target.value))}
        ></input>
      </span>
      <span>
        choose your border color{" "}
        <input
          type="color"
          value={border}
          onChange={(e) => dispatch(borderColor(e.target.value))}
        ></input>
      </span>
      <span>
        choose your background color
        <input
          type="color"
          value={background}
          onChange={(e) => dispatch(backgroundColor(e.target.value))}
        />
      </span>
    </div>
  );
}
