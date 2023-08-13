//signup component

import React, { useState } from "react";
import laptop from "../images/laptop.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
    // console.log(user);
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("INVALID REGISTRATION");
      console.log("INVALID REGISTRATION");
    } else {
      window.alert("REGISTRATION successfull");

      console.log("REGISTRATION successfull");

      navigate("/login");
    }
  };

  return (
    <>
      <div className="home-page  ">
        <div className="right"></div>
        <div className="left"></div>
        <div className="signup-form-content">
          <div className="image">
            <figure>
              <img src={laptop} alt="registration-pic" />
            </figure>
            <NavLink to="/login">Already Registered</NavLink>
          </div>
          <div className="signup-form">
            <h1>SignUp</h1>

            <form method="POST">
              <div className="form-group">
                <label htmlFor="name">
                  <i class="zmdi zmdi-account "></i>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  value={user.name}
                  onChange={handleInputs}
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <i class="zmdi zmdi-email "></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="Your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">
                  <i class="zmdi zmdi-phone-in-talk "></i>
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  value={user.phone}
                  onChange={handleInputs}
                  placeholder="Your phone"
                />
              </div>
              <div className="form-group">
                <label htmlFor="work">
                  <i class="zmdi zmdi-slideshow "></i>
                </label>
                <input
                  type="text"
                  name="work"
                  id="work"
                  autoComplete="off"
                  value={user.work}
                  onChange={handleInputs}
                  placeholder="Occupation"
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
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="Your Password"
                />
              </div>

              <div className="form-group">
                <label htmlFor="cpassword">
                  <i class="zmdi zmdi-lock "></i>
                </label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  autoComplete="off"
                  value={user.cpassword}
                  onChange={handleInputs}
                  placeholder="Confirm your Password"
                />
              </div>

              <button type="button" value="register" onClick={PostData}>
                Submit
              </button>
            </form>
          </div>

          <hr />
        </div>
      </div>
    </>
  );
}

export default SignUp;
