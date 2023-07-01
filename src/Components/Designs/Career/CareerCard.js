import { Paper } from "@mui/material";
import React, { Fragment, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const CareerCard = () => {
  const JobProfileData = [
    {
      position: "Hair Stylist",
      description:
        "Looking for a talented hairstylist to join our team! As a hairstylist at our salon, you'll have the opportunity to work with a diverse clientele and showcase your creativity through your hair artistry. ",
    },
    {
      position: "Skin Expert",
      description:
        "At our salon, you'll have the opportunity to provide personalized skincare consultations and treatments to our clients, using your expertise to create customized plans that address their individual needs.",
    },
    {
      position: "Assistant Hair Stylist",
      description:
        "In this role, you'll work closely with our senior stylists, assisting with client consultations, shampooing, conditioning, blow-drying, and other salon services. ",
    },
  ];

  return (
    <Fragment>
      <Container style={{ marginTop: "60px" }}>
        <Row style={{ justifyContent: "center" }}>
          <Col>
            <h3
              style={{
                color: "orange",
                fontFamily: "Delicious Handrawn,cursive",
              }}
            >
              Beauty is our Passion and Perfection is our Goal
            </h3>

            <h4 style={{ fontWeight: "bold" }}>
              Be a Blooming Salon Expert Now
            </h4>

            <p>
              Blooming Salon is looking for experts who are willing to learn and
              explore a career where success meets style.
            </p>
          </Col>

          <Row style={{ marginBottom: "20px", marginTop: "20px" }}>
            {JobProfileData.map(({ description, position }, i) => {
              return (
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  style={{ marginBottom: "15px" }}
                  key={i}
                >
                  <Paper
                    elevation={6}
                    style={{
                      padding: 10,
                      height: "50vh",
                    }}
                  >
                    <h5
                      style={{
                        marginTop: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      {position}
                    </h5>

                    <p
                      style={{
                        padding: "20px",
                        height: "40vh",
                      }}
                    >
                      {description}
                    </p>
                  </Paper>
                </Col>
              );
            })}
          </Row>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CareerCard;
