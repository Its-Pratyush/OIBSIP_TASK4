//home page component

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);

  return (
    <div className="home-page">
      <div className="right"></div>
      <div className="left"></div>
      <div className="home-div">
        <p className="pt-5">WELCOME</p>
        <h1>{userName}</h1>
        <h1>
          {show ? "Happy to see you back" : "Hello I am a MERN developer"}
        </h1>
        <NavLink to={show ? "/about" : "/login"}>
          <button className="home-btn">{show ? "About" : "Login"}</button>
        </NavLink>
        <div className="social-links">
          <li>
            <i class="zmdi zmdi-github-alt"></i>
          </li>
          <li>
            <i class="zmdi zmdi-linkedin"></i>
          </li>
          <li>
            <i class="zmdi zmdi-instagram"></i>
          </li>
          <li>
            <i class="zmdi zmdi-twitter"></i>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Home;
