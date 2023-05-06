import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h2>Login With</h2>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub></FaGithub> Login with Github
      </Button>
      <div>
        <h4 className="mt-4">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook className="text-primary" />{" "}
            <span className="fw-semibold text-secondary ms-2">Facebook</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter className="text-primary" />{" "}
            <span className="fw-semibold text-secondary ms-2">Twitter</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram className="text-danger" />{" "}
            <span className="fw-semibold text-secondary ms-2">Instagram</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
