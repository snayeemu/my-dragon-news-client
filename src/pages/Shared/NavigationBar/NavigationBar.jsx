import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link className="my-auto" to="/category/0">
                Home
              </Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && <FaUserCircle className="fs-2 my-auto"></FaUserCircle>}
              {!user ? (
                <Link to="/login">
                  <Button variant="dark">Login</Button>
                </Link>
              ) : (
                <Button onClick={handleLogOut} variant="dark">
                  Logout
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
