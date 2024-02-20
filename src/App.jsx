import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Users, NotFound , UserDetails ,Options} from "./pages";
import { useSelector } from "react-redux";


export default function App() {
  const background = useSelector((state) => state.colorChanging.background);
  document.body.style.backgroundColor=background
  
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/NavbarTemplate" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Users" element={<Users />}></Route>
          <Route path="/Options" element={<Options/>}></Route>
          <Route path="/Users/:userName" element={<UserDetails/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}
