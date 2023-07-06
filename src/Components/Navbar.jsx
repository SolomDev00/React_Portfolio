import Nav from "react-bootstrap/Nav";
import logo from "../Assets/img/logo.svg";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import IconNav1 from "../Assets/img/nav-icon1.svg";
import IconNav2 from "../Assets/img/nav-icon2.svg";
import IconNav3 from "../Assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scorll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar className={scrolled ? "scrolled" : ""} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              href="#home"
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              href="#skills"
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              href="#project"
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="facebook">
                <img src={IconNav1} alt="icon" />
              </a>
              <a href="github">
                <img src={IconNav2} alt="icon" />
              </a>
              <a href="sol">
                <img src={IconNav3} alt="icon" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connent")}>
              <span>Let's Connent!</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
