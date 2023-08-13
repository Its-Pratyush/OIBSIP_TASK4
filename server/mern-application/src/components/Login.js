//login page compoenent

import React, { useContext, useState } from "react";
import login from "../images/login.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../App";

function Login() {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  console.log(email);

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("INVALID CREDENTIALS");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("LOGIN SUCCESSFULL");
      navigate("/");
    }
  };

  return (
    <>
      <div className="home-page  ">
        <div className="right"></div>
        <div className="left"></div>
        <div className="signIn-form-content">
          <div className="Signin-image">
            <figure>
              <img src={login} alt="registration-pic" />
            </figure>
            <NavLink to="/signup">Create an Account</NavLink>
          </div>
          <div className="signIn-form">
            <h1>Sign-In</h1>

            <form method="POST">
              <div className="form-group">
                <label htmlFor="email">
                  <i class="zmdi zmdi-email "></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <i class="zmdi zmdi-lock "></i>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your Password"
                />
              </div>

              <button type="button" onClick={loginUser}>
                Login
              </button>
            </form>
          </div>

          <hr />
        </div>
      </div>
    </>
  );
}

export default Login;
