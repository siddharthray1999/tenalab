import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Ak47 = () => {
  return (
    <div>
      <Navbar />
      <h1
        className="ak-assc"
        style={{
          color: "#393501",
          fontWeight: "700",
          marginLeft: "5%",
          marginTop: "5%",
        }}
      >
        AK 47 Accessories
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
              src="https://tenacitilab.com/img/Comp4.png"
              alt=""
              style={{ width: "500px" }}
            />
          </div>
          <div>
            <h4 style={{ color: "rgb(57, 53, 1)" }} className="ak-model">
              Model - AKM4-FB
            </h4>
            <h4 style={{ color: "rgb(57, 53, 1)" }} className="ak-model">
              M4 Style Foldable Butt
            </h4>
            <ul className="ak-descrip">
              <li style={{ marginTop: "4%", color: "#393501" }}>
                Non slip design with low profile enhancing tactical performance
              </li>
              <li style={{ marginTop: "1%", color: "#393501" }}>
                08 positions tube for optimal fit of the stock length to your
                battle stanch.
              </li>
              <li style={{ marginTop: "1%", color: "#393501" }}>
                Bolt on design for tight and easy fit on stamped receiver AK.
              </li>
              <li style={{ marginTop: "1%", color: "#393501" }}>
                Locking mechanism release by the push of a button with a spring
                lock on folded position.
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
              className="ak-shop-btn"
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

export default Ak47;
