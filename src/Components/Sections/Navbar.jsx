import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ background: "#5B7742" }}>
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            className="company-logo"
            src="https://tenacitilab.com/assets/img/Tenacity-Lab2.png"
            style={{
              width: "80px",
              marginLeft: "-6rem",
              cursor: "pointer",
            }}
          ></img>{" "}
        </Link>
        <Navbar.Brand
          href="#home"
          style={{ fontWeight: "800", fontSize: "30px" }}
          className="company-name"
        >
          Tenaciti Lab
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
              <Nav.Link
                style={{
                  color: "white",
                  cursor: "pointer",
                  marginLeft: "3rem",
                }}
              >
                Home
              </Nav.Link>
            

            <NavDropdown
              title="Modification/Upgradation Kit"
              id="collasible-nav-dropdown"
              style={{ color: "white" }}
            >
              <Link to="/AK-47" style={{ textDecoration: "none" }}>
                <NavDropdown.Item href="#action/3.1">
                  AK 47 Accessories
                </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to="/Sniper" style={{ textDecoration: "none" }}>
                <NavDropdown.Item href="#action/3.2">
                  Dragnov Sniper Rifle
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Link to="/FlashLight" style={{ textDecoration: "none" }}>
              <Nav.Link href="#features" style={{ color: "white" }}>
                Flash Light
              </Nav.Link>
            </Link>
            <Link to="/TacticalLight" style={{ textDecoration: "none" }}>
              <Nav.Link href="#features" style={{ color: "white" }}>
                Tactical Light
              </Nav.Link>
            </Link>

            <NavDropdown
              title="

              TAC Insole"
              id="collasible-nav-dropdown"
            >
              <Link to="/Thermalinsole" style={{ textDecoration: "none" }}>
                <NavDropdown.Item href="#action/3.1">
                  Thermal Insol
                </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to="/Antipenetration" style={{ textDecoration: "none" }}>
                <NavDropdown.Item href="#action/3.2">
                  Anti-Penetration Insole
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown
              title="

              Mounting Accessories"
              id="collasible-nav-dropdown"
            >
              <Link to="/Mpassault" style={{ textDecoration: "none" }}>
                <NavDropdown.Item href="#action/3.1">
                  MP-5 Assault Rifle
                </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to="/Tavor" style={{ textDecoration: "none" }}>
                <NavDropdown.Item href="#action/3.2">TAVOR-21</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to="/Steyr" style={{ textDecoration: "none" }}>
                <NavDropdown.Item href="#action/3.3">
                  Steyr SSG 69
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Link to="/Helipad" style={{ textDecoration: "none" }}>
              <Nav.Link href="#features" style={{ color: "white" }}>
                Helipad / Heliport Solution
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
