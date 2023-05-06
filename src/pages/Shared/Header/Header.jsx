import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p className="fw-semibold fs-5 text-secondary">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
      <div className="d-flex ">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={80}>
          I can be a React component, multiple React components, or just some
          text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
          temporibus amet? Non esse sed deserunt corrupti nihil beatae maiores!
          Fugiat, eaque at earum consequuntur maiores molestiae optio placeat
          laboriosam itaque?
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
