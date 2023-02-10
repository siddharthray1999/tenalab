import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div style={{ marginTop: "2%" }}>
      <footer
        className="text-center text-lg-start footer-color text-muted"
        style={{ background: "#696969" }}
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-2 border-bottom">
          <div className="me-5 d-none d-lg-block social-net">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <AiFillFacebook style={{ fontSize: "35px", margin: "5px" }} />
            <AiFillInstagram style={{ fontSize: "35px", margin: "5px" }} />
            <AiFillTwitterCircle style={{ fontSize: "35px", margin: "5px" }} />
            <AiFillYoutube style={{ fontSize: "35px", margin: "5px" }} />
            <AiFillLinkedin style={{ fontSize: "35px", margin: "5px" }} />
          </div>
        </section>

        <section className="footer-col">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6
                  className="text-uppercase fw-bold mb-4 company-name"
                  style={{ fontSize: "30px", marginLeft: "-4rem" }}
                >
                  <i className="fas fa-gem me-3 text-secondary"></i>
                  Tenaciti Lab
                </h6>
                <img
                  style={{
                    width: "130px",
                    marginLeft: "9px",
                    marginTop: "2rem",
                  }}
                  src="https://tenacitilab.com/assets/img/Tenacity-Lab2.png"
                  alt=""
                />
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 product-head footer-header">
                  Products
                </h6>
                <p className="product-head">
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    AK 47 Accessories
                  </a>
                </p>
                <p className="product-head">
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Flash Light
                  </a>
                </p>
                <p className="product-head">
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Tactical Light
                  </a>
                </p>
                <p className="product-head">
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Thermal Insole
                  </a>
                </p>
                <p className="product-head">
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    MP-5 Assault Rifle
                  </a>
                </p>
                <p className="product-head">
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Helipad / Heliport solution
                  </a>
                </p>
                <p className="product-head">
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Anti-penetration Insole
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 footer-header">
                  Contact us
                </h6>
                <p className="office-address">
                  <i className="fas fa-envelope  text-secondary "></i>
                  business@tenacitilab.com
                </p>
                <p className="office-address">
                  <i className="fas fa-phone  text-secondary"></i> +91
                  9818153956
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 footer-header">
                  Address
                </h6>
                <p className="office-address">
                  <i className="fas fa-home  text-secondary "></i>
                  Corporate Office : C- 403, M3M Corner Walk, Sector – 74,
                  Gurugram , Haryana – 122004
                </p>
                <p className="office-address">
                  <i className="fas fa-home  text-secondary "></i>
                  Corporate Office : 323,Centrum Plaza, Sector – 54 chowk,
                  Gurugram , Haryana – 122004
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-2" style={{ backgroundColor: "black" }}>
          © 2023 Copyright:
          <a
            className="text-reset fw-bold"
            href="https://eoxysit.com/"
            style={{ textDecoration: "none" }}
          >
            TENACITI LAB LLP.
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
