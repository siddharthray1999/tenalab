import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Steyr = () => {
  return (
    <div>
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
          Steyr SSG 69
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

export default Steyr;
