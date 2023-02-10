import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
const ThermalInsole = () => {
  return (
    <div>
      <div>
        <Navbar />
        <h1
          className="ther-head"
          style={{
            color: "#393501",
            fontWeight: "700",
            marginLeft: "5%",
            marginTop: "5%",
          }}
        >
          Thermal Insole
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
              <img
                src="https://tenacitilab.com/img/heated-insole-boot.jpg"
                alt=""
                style={{ width: "500px" }}
              />
            </div>
            <div>
              <h4 style={{ color: "rgb(57, 53, 1)" }} className="ther-desp">
                Thermal Insole for Extreme Cold Climate
              </h4>
              <h4 style={{ color: "rgb(57, 53, 1)" }} className="ther-desp">
                ( Patent Published vide application No 202011003190 )
              </h4>
              <p
                style={{ color: "rgb(57, 53, 1)", marginTop: "2%" }}
                className="ther-para"
              >
                This insole is for use in extremely cold climates as an insert
                for shoes of any type and size.
                <br /> The insole is intended to provide comfort up to a
                temperature of minus 25 C as experienced <br /> in high-altitude
                areas of India. The user of this insole will be able to carry
                out all daily activities
                <br /> like walking, climbing, mountaineering, skiing, etc,
                without discomfort.
              </p>
              <p
                style={{ color: "rgb(57, 53, 1)", marginTop: "2%" }}
                className="ther-para"
              >
                The insole is molded to have the shape of a shoe and does not
                fold back/cause bunching while <br /> removing the shoe or
                during walking and does not have any wrinkles or folds.
              </p>
              <h4
                style={{ color: "rgb(57, 53, 1)", marginTop: "2%" }}
                className="ther-para"
              >
                Advantages
              </h4>
              <ul className="term-para">
                <li style={{ marginTop: "4%", color: "#393501" }}>
                  Improves the efficiency of troops operating in extremely cold
                  climate.
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Does not require any external input to maintain the body
                  temperature, use bodies own <br />
                  temperature to maintain warmth
                </li>
              </ul>
              <h4 className="ther-para">
                The Insole is as per specification published by DGQA and
                <br />
                consists of the following layers :
              </h4>
              <ul className="term-para">
                <li style={{ marginTop: "4%", color: "#393501" }}>
                  Layer 1 - To provide comfort, warmth and having anti
                  perspiration properties.
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Layer 2 - To provide cushion and increase comfort.
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Layer 3 - To provide additional warmth and comfort.
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Layer 4 - Heat Shield consisting of a reflective film to trap
                  heat within upper.
                </li>
                <li style={{ marginTop: "1%", color: "#393501" }}>
                  Layer 5 - To provide a medium to join these layers together by
                  process of lamination <br />
                  with water resistance properties.
                </li>
              </ul>

              <button
                className="therm-btn"
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

export default ThermalInsole;
