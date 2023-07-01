import { Paper } from "@mui/material";
import React, { Fragment } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";

const WhyChooseBlooming = () => {
  return (
    <Fragment>
      <Container style={{ marginTop: "20px" }}>
        {/* Background */}
        <Paper elevation={10} style={{ padding: 2 }}>
          <Image fluid src="/Images/WhyChooseUs.jpg" />
        </Paper>

        {/* Content */}
        <Row
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col
            xs={12}
            sm={12}
            md={10}
            lg={10}
            style={{
              marginTop: "-10%",
            }}
          >
            <Paper
              elevation={6}
              style={{
                backgroundImage: "url(/Images/WhyChooseUs2.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100vh",
                padding: 10,
              }}
            >
              <h1 style={{ letterSpacing: "10px", fontWeight: "550" }}>
                Why Choose Blooming
              </h1>

              <h5 style={{ lineHeight: "1.3em", color: "white" }}>
                If you're looking for a salon that offers exceptional services,
                a comfortable atmosphere, and a team of skilled stylists, then
                Blooming is the perfect choice for you. With years of experience
                in the industry, Blooming has established a reputation as one of
                the best salons in town, offering a wide range of services from
                haircuts and styling to coloring and highlights. The team at
                Blooming is dedicated to providing top-notch customer service
                and making sure that every client leaves feeling pampered and
                satisfied.
              </h5>

              <a href="#" style={{ textDecoration: "none" }}>
                Click to see more
              </a>
            </Paper>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default WhyChooseBlooming;
