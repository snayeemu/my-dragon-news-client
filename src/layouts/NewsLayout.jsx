import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";

const NewsLayout = () => {
  return (
    <div>
      <div>
        <Header></Header>
        <NavigationBar></NavigationBar>
        <Container>
          <Row>
            <Col lg={9}>
              <Outlet></Outlet>
            </Col>
            <Col lg={3}>
              <RightNav />
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default NewsLayout;
