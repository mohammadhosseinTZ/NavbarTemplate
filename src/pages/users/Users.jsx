import React, { useEffect, useReducer, useState } from "react";
import MainNavbar from "../../layout/MainNavbar";
import users_style from "./users.style.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState();
  const [perPage, setPerPage] = useState();
  useEffect(() => {
    fetch(
      `https://www.melivecode.com/api/users?page=${page ?? 2}&per_page=${
        perPage ?? 2
      }`
    )
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, [page, perPage]);
  const handlePerPage = (e) => setPerPage(e.target.value);
  const text = useSelector((state) => state.colorChanging.text);
  const border = useSelector((state) => state.colorChanging.border);
  return (
    <div className={users_style.container}>
      <MainNavbar />
      <div style={{borderColor:border}}>
        <div className={users_style.paging}>
          <div>
            <button onClick={() => setPage(1)}>1</button>
            <button onClick={() => setPage(2)}>2</button>
            <button onClick={() => setPage(3)}>3</button>
            <button onClick={() => setPage(4)}>4</button>
            <button onClick={() => setPage(5)}>5</button>
          </div>
          <div>
            <span style={{color:text}}>User per page:</span>
            <select onChange={handlePerPage}>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className={users_style.items}>
          {users.map((user, index) => (
            <div key={index} className={users_style.item}>
              <img src={user.avatar} alt="" width={100} />
              <Link to={user.fname} style={{ textAlign: "center" }}>{user.fname}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
