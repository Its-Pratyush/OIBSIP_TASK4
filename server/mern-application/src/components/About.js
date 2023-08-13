//about us page

import React, { useEffect, useState } from "react";
import about from "../images/about.jpg";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      window.alert("You are not logged in");
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className=" home-page container-about emp-profile">
        <div className="right"></div>
        <div className="left"></div>
        <div className="about">
          <form method="GET">
            <div className="row">
              <div className="col-d-md-4">
                <img src={about} alt="about" />
              </div>
              <div className="col-d-md-6">
                <div className="profile-head">
                  <h5>{userData.name}</h5>
                  <h6>{userData.work}</h6>
                  <p className="profile-rating mt-3 mb-5">
                    RANKINGS: <span>1/10</span>
                  </p>

                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        href="#home"
                        id="home-tab"
                        data-toggle="tab"
                        role="tab"
                        className="nav-link active"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#profile"
                        id="profile-tab"
                        data-toggle="tab"
                        role="tab"
                        className="nav-link active"
                      >
                        Profile
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2">
                <input
                  type="submit"
                  className="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit profile"
                />
              </div>
            </div>

            <div className="row ">
              <div className="profile-work">
                <p>Work Links</p>
                {/* dummy links  */}
                <a href="https://www.google.com/" target="google">
                  Google.com
                </a>
                <br />
                <a href="https://www.google.com/" target="google">
                  Google.com
                </a>
                <br />
                <a href="https://www.google.com/" target="google">
                  Google.com
                </a>
                <br />
                <a
                  className="mt-3"
                  href="https://www.google.com/"
                  target="google"
                >
                  Google.com
                </a>
                <br />
              </div>
              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane  fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>UserID</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData._id}</p>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.name}</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.email}</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.phone}</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.work}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default About;
