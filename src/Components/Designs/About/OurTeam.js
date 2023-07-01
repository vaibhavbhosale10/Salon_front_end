import React, { Fragment } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import { Paper } from "@mui/material";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Angela Schrute",
      title: "Hair Stylist",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://i.pinimg.com/564x/64/13/bc/6413bcf59b12cffd369cf80448d633dc.jpg",
    },
    {
      name: "Jane Smith",
      title: "Makeup Artist",
      bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://i.pinimg.com/564x/81/c4/5a/81c45aff669115528fe798d797247833.jpg",
    },
    {
      name: "Tom Wilson",
      title: "Nail Technician",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image:
        "https://i.pinimg.com/564x/42/ff/5d/42ff5dc2753cc0c440f8734d3b7644e5.jpg",
    },
  ];

  return (
    <Fragment>
      <Container fluid style={{ marginTop: "20px" }}>
        {/* Our Team */}
        <Container style={{ marginBottom: "10px" }}>
          <Row>
            <Col>
              <h3
                style={{
                  color: "orange",
                  fontFamily: "Delicious Handrawn,cursive",
                }}
              >
                Team of Experts in Action
              </h3>
              <h3 style={{ fontWeight: "bold" }}>Our Team</h3>
            </Col>
          </Row>
        </Container>

        {/* Team Members */}
        <Container>
          <Row>
            {teamMembers.map((member, index) => (
              <Col xs={12} sm={12} md={6} lg={4} key={index}>
                <Paper
                  style={{
                    padding: "15px",
                    marginBottom: "15px",
                    height: "70vh",
                  }}
                  elevation={6}
                >
                  <Image
                    fluid
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                      boxShadow: "7px 8px 5px 2px #6b616b",
                      marginBottom: "10px",
                    }}
                    src={member.image}
                    alt={member.name}
                  />
                  <h2>{member.name}</h2>

                  <h6 style={{ color: "gray" }}>{member.title}</h6>

                  <p>{member.bio}</p>
                </Paper>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </Fragment>
  );
};

export default OurTeam;
