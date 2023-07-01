import React, { Fragment } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Fragment>
      {/* Header */}
      <Header />

      {/* Contact Form  */}
      <ContactForm />

      {/* Contact */}
      <Container style={{ marginTop: "30px" }}>
        {/* Let's get in touch */}
        <Row style={{ marginBottom: "20px" }}>
          <Col>
            <h5 style={{ textTransform: "uppercase", letterSpacing: "0.7em" }}>
              Let's get in touch
            </h5>
          </Col>
        </Row>

        {/*  Contact, Address, Opening Hours */}

        <Row style={{ marginBottom: "20px" }}>
          {/* Contact (Say Hello!) */}
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            style={{
              marginBottom: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h5
              style={{
                textTransform: "uppercase",
                color: "orange",
                fontWeight: "bold",
              }}
            >
              Say Hello
            </h5>
            <p>
              Phone: 123-456-7890 <br />
              Email: info@mysite.com
            </p>
            <Col
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {/* Facebook */}
              <a href="/#!">
                <i
                  style={{
                    color: "black",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                  className="fa-brands fa-facebook "
                ></i>
              </a>

              {/* Instagram */}
              <a href="/#!">
                <i
                  style={{
                    color: "black",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                  className="fa-brands fa-instagram "
                ></i>
              </a>

              {/* Whatsapp */}
              <a href="/#!">
                <i
                  style={{
                    color: "black",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                  className="fa-brands fa-whatsapp "
                ></i>
              </a>
            </Col>
          </Col>

          {/* Address */}
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            style={{
              marginBottom: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h5
              style={{
                textTransform: "uppercase",
                color: "orange",
                fontWeight: "bold",
              }}
            >
              Address
            </h5>
            <p>
              500 Terry Francine Street <br /> San Francisco, CA 94158
            </p>
          </Col>

          {/* Opening Hours */}
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            style={{
              marginBottom: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h5
              style={{
                textTransform: "uppercase",
                color: "orange",
                fontWeight: "bold",
              }}
            >
              Opening Hours
            </h5>

            <p>
              Mon - Fri: 10am - 10pm <br />
              Sat - Sun: 8am - 10pm
            </p>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default Contact;
