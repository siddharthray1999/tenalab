import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
const AntiPenetation = () => {
  return (
    <div>
      <div>
        <div>
          <Navbar />
          <h1
            className="adhed-head"
            style={{
              color: "#393501",
              fontWeight: "700",
              marginLeft: "5%",
              marginTop: "5%",
            }}
          >
            Abhed (अभेद)
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
                  src="https://tenacitilab.com/img/anti-p.jpg"
                  alt=""
                  style={{ width: "500px" }}
                />
              </div>
              <div>
                <h4 style={{ color: "rgb(57, 53, 1)" }} className="add-head">
                  Anti Penetration Insoles
                </h4>
                <p
                  style={{ color: "rgb(57, 53, 1)", marginTop: "3%" }}
                  className="adhad-para"
                >
                  This is a perfect solution for our troops deployed in Anti
                  Insurgency <br />
                  environment where ANE uses spike as a potent weapon to slow
                  down <br /> our troops.
                </p>
                <h4 style={{ color: "rgb(57, 53, 1)" }} className="adhed-spec">
                  Specifications:
                </h4>
                <p className="adhad-para">
                  An Anti Penetration Insole which can be fitted into existing
                  Leather and Jungle boot* and is :
                </p>

                <ul className="add-hd">
                  <li style={{ marginTop: "4%", color: "#393501" }}>
                    Comfortable and flexible.
                  </li>
                  <li style={{ marginTop: "1%", color: "#393501" }}>
                    Can withstand pressure up to 2100N.
                  </li>
                  <li style={{ marginTop: "1%", color: "#393501" }}>
                    Can withstand extreme temperatures.
                  </li>
                  <li style={{ marginTop: "1%", color: "#393501" }}>
                    Available in sizes of UK 6-12.
                  </li>
                  <li style={{ marginTop: "1%", color: "#393501" }}>
                    Waterproof.
                  </li>
                </ul>
                <h6 className="adhad-para">
                  * With A Standard Warranty Of Three Years For Anti Spike
                  Material
                </h6>

                <button
                  className="adhed-btn"
                  style={{
                    width: "100px",
                    height: "40px",
                    fontSize: "15px",
                    color: "white",
                    border: "none",
                    background: "black",
                    borderRadius: "5px",
                    marginTop: "3%",
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
    </div>
  );
};

export default AntiPenetation;
