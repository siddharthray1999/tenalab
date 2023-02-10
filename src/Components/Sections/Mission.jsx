import React from "react";
import peakpx from "./peakpx.jpg";

const Mission = () => {
  return (
    <div
      style={{
        marginTop: "-1%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div style={{ marginLeft: "11%", marginTop: "7%" }}>
        <h1
          style={{ fontWeight: "800", marginLeft: "-57%" }}
          className="mission-head"
        >
          Mission
        </h1>
        <div style={{ textAlign: "left" }} className="misson-font">
          We are driven by motto of " Innovative and Affordable solution through
          research and constant engagement with customer"
        </div>
        <div
          style={{ fontWeight: "700", marginLeft: " -71%", marginTop: " 6%" }}
          className="ceo-name"
        >
          VIKAS CHAWLA
        </div>
        <div style={{ marginLeft: "-92%" }} className="misson-font">
          CEO
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1
            className="year-exp"
            style={{
              fontSize: "141px",
              fontWeight: "600",
              marginLeft: "-37%",
              marginTop: "-7%",
            }}
          >
            23
          </h1>
          <h4 style={{ marginTop: "8%" }} className="misson-font">
            YEARS OF <br />
            EXPERIENCE
          </h4>
        </div>
        <div>
          <button
            className="misson-font"
            style={{
              width: " 38%",
              height: "45px",
              marginLeft: "-63%",
              color: "white",
              fontSize: "20px",
              background: "#858457",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
      <div>
        <img
          className="peak-photo"
          src={peakpx}
          alt=""
          style={{
            width: "63%",
            marginLeft: "27%",
            marginTop: "13%",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        />
      </div>
    </div>
  );
};

export default Mission;
