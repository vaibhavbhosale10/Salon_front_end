import React, { Fragment } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import Paper from "@mui/material/Paper";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import OurTeam from "./OurTeam";

const About = () => {
  return (
    <Fragment>
      {/* Header */}
      <Header />

      {/* About Us */}
      <Container fluid>
        <Container>
          <Row>
            {/* About Us */}
            <Col>
              <h3
                style={{
                  color: "orange",
                  fontFamily: "Delicious Handrawn,cursive",
                }}
              >
                Discover Our Story
              </h3>
              <h3 style={{ marginBottom: "20px", fontWeight: "bold" }}>
                About Us
              </h3>
            </Col>
          </Row>
          <Row>
            {/* Our Story */}
            <Col
              xs={12}
              sm={12}
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "15px",
              }}
            >
              <Paper elevation={6} style={{ padding: 10 }}>
                <h4 style={{ fontWeight: "bold" }}>Our Story</h4>

                <p>
                  At Hair & Care, we believe that beauty is not just skin deep -
                  it's an experience that should be shared and celebrated. Our
                  journey began in 2011 when Mr.X had a vision to create a salon
                  that offered more than just haircuts and facials - a place
                  where clients could feel comfortable and cared for. Starting
                  from a humble corner shop, we quickly gained a reputation for
                  our exceptional service and attention to detail.
                </p>
              </Paper>
            </Col>

            {/* Image */}
            <Col xs={12} sm={12} md={6} style={{ marginBottom: "15px" }}>
              <Paper elevation={6} style={{ padding: 10 }}>
                <Image fluid src="/Images/AboutUs1.webp" alt="Team" />
              </Paper>
            </Col>
          </Row>

          {/* Your Beauty is Our Inspiration */}
          <Row>
            {/* Image */}
            <Col xs={12} sm={12} md={6} style={{ marginBottom: "15px" }}>
              <Paper elevation={6} style={{ padding: 10 }}>
                <Image fluid src="/Images/AboutUs2.jpg" alt="Team" />
              </Paper>
            </Col>

            {/* Your Beauty is Our Inspiration */}
            <Col
              xs={12}
              sm={12}
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "15px",
              }}
            >
              <Paper elevation={6} style={{ padding: 10 }}>
                <h4 style={{ fontWeight: "bold" }}>
                  Your Beauty is Our Inspiration
                </h4>

                <p>
                  At our salon, we believe that everyone is beautiful in their
                  own unique way. Our goal is to enhance that beauty and inspire
                  our clients to feel confident and empowered. We take pride in
                  our ability to create customized looks that highlight our
                  clients' natural features and personality. Our team of skilled
                  professionals is dedicated to staying up-to-date with the
                  latest trends and techniques in the beauty industry, so that
                  we can provide the best possible service to our clients.
                </p>
              </Paper>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Our Team */}
      <OurTeam />

      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default About;
