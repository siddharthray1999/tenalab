import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer.jsx";
const Sniper = () => {
  return (
    <div>
      <div>
        <Navbar />
        <h1
          style={{
            color: "#393501",
            fontWeight: "700",
            marginLeft: "5%",
            marginTop: "5%",
          }}
        >
          Dragnov Sniper Rifle
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
                className="cominmg-soon"
                src="https://tenacitilab.com/img/coming-soon.png"
                alt=""
                style={{ width: "500px" }}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Sniper;
