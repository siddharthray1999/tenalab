import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
const TacticalLight = () => {
  return (
    <div>
      <div>
        <Navbar />
        <h1
          className="opre-light"
          style={{
            color: "#393501",
            fontWeight: "700",
            marginLeft: "5%",
            marginTop: "5%",
          }}
        >
          Operational Lightning Solution
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
                src="https://tenacitilab.com/img/Firefly-Indoor.jpg"
                alt=""
                style={{ width: "500px" }}
              />
            </div>
            <div>
              <h4 style={{ color: "rgb(57, 53, 1)" }} className="tact-head">
                {" "}
                TACTICAL LIGHT BALL
              </h4>

              <ul className="tat-descrip">
                <li style={{ marginTop: "4%", color: "#393501" }}>
                  Non slip design with low profile enhancing tactical
                  performance
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  08 positions tube for optimal fit of the stock length to your
                  battle stanch.
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Bolt on design for tight and easy fit on stamped receiver AK.
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Locking mechanism release by the push of a button with a
                  spring lock on folded position.
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Three integrated slots for sling attachment, one in the front
                  and two at the rear.
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Two ambidextrous metal Quick Detach rear sling swivel mounting
                  ports
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  After market sized 6061 hard anodized aluminium buffer tube.
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Weight between 350- 500 gms
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Adjustable cheek rest
                </li>
              </ul>

              <button
                className="tac-btn"
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

export default TacticalLight;
