import { Col, Container, Row } from "react-bootstrap";
import { MailChimpForm } from "./MailChimp";
import logo from "../Assets/img/logo.svg";
import navIcon1 from "../Assets/img/nav-icon1.svg";
import navIcon2 from "../Assets/img/nav-icon2.svg";
import navIcon3 from "../Assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailChimpForm />
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="1">
                <img src={navIcon1} alt="" />
              </a>
              <a href="2">
                <img src={navIcon2} alt="" />
              </a>
              <a href="3">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>CopyRight 2023. All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
