import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Tavor = () => {
  return (
    <div>
      {" "}
      <div>
        <Navbar />
        <h1
          className="mp-head"
          style={{
            color: "#393501",
            fontWeight: "700",
            marginLeft: "5%",
            marginTop: "5%",
          }}
        >
          Mounting Accessories
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
                src="https://tenacitilab.com/img/DSC_9195.jpg"
                alt=""
                style={{ width: "500px" }}
              />
            </div>
            <div>
              <h4 style={{ color: "rgb(57, 53, 1)" }} className="mp-descp">
                Picatinny Rail For Tavor 21 Assault Rifle
              </h4>

              <ul className="mp-list">
                <li style={{ marginTop: "4%", color: "#393501" }}>
                  Provides a Superior Sight Mount Solution
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Steady Sight Mount Stability
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  MIL-STD 1913
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Manufactured with Aluminum 6061
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Easy, no gunsmith, install
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Allows the user to mount an optic and a light or laser while
                  retaining the factory handguard
                </li>
              </ul>

              <button
                className="mounting-btn"
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
    </div>
  );
};

export default Tavor;
