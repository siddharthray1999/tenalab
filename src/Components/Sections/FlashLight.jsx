import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

const FlashLight = () => {
  return (
    <div>
      <Navbar />
      <h1
        className="flash-light"
        style={{
          color: "#393501",
          fontWeight: "700",
          marginLeft: "5%",
          marginTop: "5%",
        }}
      >
        Flashlight
      </h1>
      <div
        style={{
          marginLeft: "5%",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          width: "90%",
          height: "80vh",
          paddingTop: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <img
              className="flash-lgt"
              src="https://tenacitilab.com/img/Flashlight-render.JPG"
              alt=""
              style={{ width: "400px" }}
            />
          </div>
          <div className="flashlight-dtl">
            <h4 style={{ color: "rgb(57, 53, 1)" }} className="flash-discrip">
              Flashlight{" "}
            </h4>
            <h4 style={{ color: "rgb(57, 53, 1)" }} className="flash-discrip">
              Description
            </h4>
            <ul className="flh-lgt">
              <li style={{ marginTop: "4%", color: "#393501" }}>
                Owl flashlight is suitable for tactical operations.
              </li>
              <li style={{ marginTop: "1%", color: "#393501" }}>
                The flashlight allows user with PNVDs and other night vision
                devices to see in pitch-dark environments.
              </li>
              <li style={{ marginTop: "1%", color: "#393501" }}>
                Comes in two models one with light in visible spectrum and other
                in invisible spectrum
              </li>
            </ul>

            <button
            className="flsh-btn"
              style={{
                width: "100px",
                height: "40px",
                fontSize: "15px",
                color: "white",
                border: "none",
                background: "black",
                borderRadius: "5px",
              }}
            >
              SHOP
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FlashLight;
