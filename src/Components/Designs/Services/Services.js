import React, { Fragment, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "react-bootstrap/esm/Container";
import { Paper } from "@mui/material";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import OurServices from "./OurServices";

const Services = () => {
  const [color, setColor] = useState("");
  const changeView = (e) => {
    setColor((e.target.style.color = "black"));
    setColor((e.target.style.backgroundColor = "white"));
    setColor((e.target.style.borderColor = "black"));
  };

  const revertChange = (e) => {
    setColor((e.target.style.color = "white"));
    setColor((e.target.style.backgroundColor = "black"));
    setColor((e.target.style.borderColor = "gold"));
  };

  return (
    <Fragment>
      {/* Header */}
      <Header />

      {/* Services Banner */}
      <Container>
        {/* Services Banner */}
        <Paper
          elevation={10}
          style={{
            padding: 2,
            position: "relative",
            backgroundImage: "url(/Images/ServicesBanner.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 350,
            width: "100%",
          }}
        >
          {/* Contents shown on the Banner */}
          <Row>
            <Col style={{ position: "absolute", padding: 30 }}>
              <h1 style={{ fontWeight: 300 }}>
                Look and Feel Beautiful Without Overspending.
              </h1>
              <p style={{ marginTop: 10 }}>
                Get Salon-Quality services at a fraction of the cost.
              </p>

              <Button
                href="/signup"
                onMouseOver={changeView}
                onMouseLeave={revertChange}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: 10,
                  borderRadius: 5,
                  borderColor: "gold",
                  marginTop: 5,
                }}
              >
                Click Here for Latest offers
              </Button>
            </Col>
          </Row>
        </Paper>
      </Container>

      {/* Our Services */}
      <OurServices />

      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default Services;
