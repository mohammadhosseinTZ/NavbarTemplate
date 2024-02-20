import React from 'react'
import { backgroundColor, borderColor, textColor } from '../../store/slice/colorChangingSlice';
import { useDispatch } from 'react-redux';

export default function AddThemColor() {
    const dispatch = useDispatch();
  return (
    <div>
        <button
            onClick={() => {
              dispatch(textColor("#000000"));
              dispatch(borderColor("#bababa"));
              dispatch(backgroundColor("#ffebeb"));
            }}
          >
            Light them
          </button>
          <button onClick={()=>{
            dispatch(textColor("#ffebeb"));
            dispatch(borderColor("#bababa"));
            dispatch(backgroundColor("#000000"));
          }}>Dark them</button>
          <button onClick={()=>{
            dispatch(textColor("#d79090"));
            dispatch(borderColor("#7edf98"));
            dispatch(backgroundColor("#be43e3"));
          }}>Solarized them</button>
    </div>
  )
}
