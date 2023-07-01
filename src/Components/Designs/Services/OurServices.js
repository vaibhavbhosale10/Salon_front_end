import React, { Fragment, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Paper from "@mui/material/Paper";

const OurServices = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1401 },
      items: 4,
    },

    xLarge: {
      breakpoint: { max: 1400, min: 1201 },
      items: 3,
    },
    large: {
      breakpoint: { max: 1200, min: 993 },
      items: 3,
    },
    medium: {
      breakpoint: { max: 992, min: 769 },
      items: 2,
    },

    small: {
      breakpoint: { max: 768, min: 577 },
      items: 1,
    },
    xSmall: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };
  return (
    <Fragment>
      <Container fluid style={{ marginTop: "40px" }}>
        <Container>
          <Row>
            <Col xs={12}>
              <h3
                style={{
                  color: "orange",
                  fontFamily: "Delicious Handrawn,cursive",
                }}
              >
                We Care for you
              </h3>
              <h3 style={{ fontWeight: "bold" }}>Our Services</h3>
            </Col>
          </Row>

          <Row>
            <Carousel responsive={responsive} autoPlay>
              <Col
                style={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Paper elevation={6} style={{ height: "80vh" }}>
                  <Image
                    fluid
                    rounded="20%"
                    src="Images/FacialTreatments.jpg"
                    style={{
                      height: "50vh",
                      width: "40vh",
                      marginBottom: "15px",
                      marginTop: "15px",
                    }}
                  />

                  <h5 style={{ marginBottom: "15px", fontWeight: "bold" }}>
                    Facial Treatment
                  </h5>
                  <p
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      height: "15vh",
                    }}
                  >
                    Facial treatments involve deep-cleaning and moisturizing the
                    face, often including the use of steam, masks, and massage.
                  </p>

                  {/* <Button
                    href="/login"
                    onMouseOver={changeView}
                    onMouseLeave={revertChange}
                    style={{
                      marginBottom: "15px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      backgroundColor: "black",
                      color: "white",
                      borderColor: "gold",
                    }}
                  >
                    Book Now
                  </Button> */}
                </Paper>
              </Col>

              <Col
                style={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Paper elevation={6} style={{ height: "80vh" }}>
                  <Image
                    fluid
                    rounded="20%"
                    src="Images/Manicure.jpg"
                    style={{
                      height: "50vh",
                      width: "40vh",
                      marginBottom: "15px",
                      marginTop: "15px",
                    }}
                  />

                  <h5 style={{ marginBottom: "15px", fontWeight: "bold" }}>
                    Manicures
                  </h5>
                  <p
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      height: "15vh",
                    }}
                  >
                    Manicure involves grooming and painting the nails, often
                    including shaping, buffing, and cuticle care.
                  </p>

                  {/* <Button
                    href="/login"
                    onMouseOver={changeView}
                    onMouseLeave={revertChange}
                    style={{
                      marginBottom: "15px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      backgroundColor: "black",
                      color: "white",
                      borderColor: "gold",
                    }}
                  >
                    Book Now
                  </Button> */}
                </Paper>
              </Col>

              <Col
                style={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Paper elevation={6} style={{ height: "80vh" }}>
                  <Image
                    fluid
                    rounded="20%"
                    src="Images/HairColoring.webp"
                    style={{
                      height: "50vh",
                      width: "40vh",
                      marginBottom: "15px",
                      marginTop: "15px",
                    }}
                  />

                  <h5 style={{ marginBottom: "15px", fontWeight: "bold" }}>
                    Hair Coloring
                  </h5>
                  <p
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      height: "15vh",
                    }}
                  >
                    Hair coloring involves changing the color of hair using
                    various techniques, such as highlights, lowlights, and
                    all-over color.
                  </p>

                  {/* <Button
                    href="/login"
                    onMouseOver={changeView}
                    onMouseLeave={revertChange}
                    style={{
                      marginBottom: "15px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      backgroundColor: "black",
                      color: "white",
                      borderColor: "gold",
                    }}
                  >
                    Book Now
                  </Button> */}
                </Paper>
              </Col>

              <Col
                style={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Paper elevation={6} style={{ height: "80vh" }}>
                  <Image
                    fluid
                    rounded="20%"
                    src="Images/HairCutMen.jpg"
                    style={{
                      height: "50vh",
                      width: "40vh",
                      marginBottom: "15px",
                      marginTop: "15px",
                    }}
                  />

                  <h5 style={{ marginBottom: "15px", fontWeight: "bold" }}>
                    Hair Cut
                  </h5>
                  <p
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      height: "15vh",
                    }}
                  >
                    Hair treatments such as cuts and colorings are some of the
                    most common salon services.Pretty much famous.
                  </p>

                  {/* <Button
                    href="/login"
                    onMouseOver={changeView}
                    onMouseLeave={revertChange}
                    style={{
                      marginBottom: "15px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      backgroundColor: "black",
                      color: "white",
                      borderColor: "gold",
                    }}
                  >
                    Book Now
                  </Button> */}
                </Paper>
              </Col>
            </Carousel>
          </Row>
        </Container>
      </Container>
    </Fragment>
  );
};

export default OurServices;
