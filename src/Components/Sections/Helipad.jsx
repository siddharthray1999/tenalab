import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Helipad = () => {
  return (
    <div>
      <div>
        <Navbar />
        <h1
          className="operational-sol"
          style={{
            color: "#393501",
            fontWeight: "700",
            marginLeft: "5%",
            marginTop: "5%",
            fontFamily: "montserrat",
          }}
        >
          Operational Lightning Solution
        </h1>
        <div
          style={{
            marginLeft: "5%",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            width: "90%",
            height: "150vh",
            paddingTop: "20px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <h6>Helipad Light Tactical</h6>
              <img
                src="https://tenacitilab.com/img/helipad.jpg"
                alt=""
                style={{ width: "500px" }}
              />
              <h6>Helipad Light Dual</h6>
              <img
                src="https://tenacitilab.com/img/helipad-dual.jpg"
                alt=""
                style={{ width: "500px" }}
              />
            </div>
            <div>
              <h4 style={{ color: "rgb(57, 53, 1)" }} className="tact-help">
                TACTICAL HELIPAD SOLUTION
              </h4>
              <h4
                style={{ color: "rgb(57, 53, 1)", marginTop: "5%" }}
                className="tt-desp"
              >
                Description
              </h4>
              <p style={{ color: "rgb(57, 53, 1)" }} className="opr-para">
                Tac Helipad Light is a device designed and developed
                <br />
                indigenously to help units / troops in conducting operations, by
                <br />
                providing them a portable helipad landing solution which
                <br />
                operates in invisible spectrum of light and is therefore not{" "}
                <br />
                visible to human eyes. Helicopter pilots putting ON any night{" "}
                <br />
                vision device can see this light from a distance, enabling them{" "}
                <br />
                to land in dark light condition.
              </p>
              <h4 style={{ color: "rgb(57, 53, 1)" }}>Usage</h4>
              <ul className="opr-li">
                <li style={{ marginTop: "4%", color: "#393501" }}>
                  Heli landing solution in tactical operations and standard
                  operation environment
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Indication of target
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Logistic drop indicator
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Special operation
                </li>
              </ul>
              <h4 style={{ color: "rgb(57, 53, 1)" }}>Features</h4>
              <ul className="opr-feat">
                <li style={{ marginTop: "4%", color: "#393501" }}>
                  Uses 3W IR LED
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Comes in two sizes. One with only invisible IR Light and with
                  <br />
                  the option of visible and invisible spectrum.
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Can be used in rainy season.
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Lightweight, made of very durable polymer.
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Waterproof : Maximum resistance against liquid and dust
                  intrusion <br /> and mechanical shocks due to fully sealed
                  optics and electronics.
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Visible during low visibility days
                </li>
              </ul>

              <button
                className="helipad-btn"
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

export default Helipad;
