import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/Modal";

const Footer = () => {
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

  // Subscribe

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Container style={{ marginTop: "40px" }}>
        {/* Subscribe FIeld */}
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Col xs={12} md={4} style={{ marginBottom: "10px" }}>
            <h6 style={{ fontWeight: "bold" }}>
              Email us to get Exclusive Offers
            </h6>
          </Col>

          <Col xs={12} md={4}>
            <Button
              onClick={handleShow}
              onMouseOver={changeView}
              onMouseLeave={revertChange}
              style={{
                backgroundColor: "black",
                color: "white",
                borderColor: "gold",
                marginBottom: "10px",
              }}
            >
              Subscribe
            </Button>
          </Col>
        </Row>

        {/* Modal for Subscribe */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title
              style={{
                color: "orange",
                fontFamily: "Hand-Drawn, cursive",
                fontSize: "20px",
              }}
            >
              Register your email for Exciting Offers
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              {/* Email */}
              <Form.Control
                style={{
                  border: "none",
                  backgroundColor: "#faf5ee",
                  fontSize: "16px",
                  marginBottom: "20px",
                }}
                required
                autoFocus
                id="email"
                name="email"
                label="Email"
                type="email"
                placeholder="Email Address"
                margin="dense"
              />

              <Modal.Footer>
                {/* Close Button */}
                <Button
                  style={{
                    fontSize: "17px",
                    backgroundColor: "black",
                    borderColor: "gold",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                  onClick={handleClose}
                >
                  Close
                </Button>

                {/* Send Button */}
                <Button
                  onClick={handleClose}
                  onMouseOver={changeView}
                  onMouseLeave={revertChange}
                  type="submit"
                  style={{
                    fontSize: "17px",
                    backgroundColor: "black",
                    borderColor: "gold",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  Send
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>

        {/* Footer Content */}
        <Row style={{ marginBottom: "20px" }}>
          <Col>
            <p>
              At our Salon, we believe in transparency and honesty in all of our
              dealings with customers. That's why we want to let you know that
              we never charge hidden fees or add-ons to our services. The price
              you see is the price you pay.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          {/* This is gonna be empty */}
          <Col
            className="d-xs-none d-sm-none d-md-block"
            md={1}
            style={{
              backgroundColor: "white",
              paddingTop: "2rem",
              paddingBottom: "2rem",
            }}
          ></Col>

          {/* Icon to nav on top */}
          <Col
            xs={2}
            sm={2}
            md={1}
            style={{
              backgroundColor: "black",
              paddingTop: "2rem",
              paddingBottom: "2rem",
              borderTopLeftRadius: "50%",
            }}
          >
            <a href="#">
              <i
                className="fa-solid fa-arrow-up-long"
                style={{
                  color: "white",
                  fontSize: "2.5rem",
                }}
              ></i>
            </a>
          </Col>

          {/* Icons */}
          <Col
            xs={10}
            sm={10}
            md={5}
            style={{
              backgroundColor: "white",
              paddingTop: "2rem",
              paddingBottom: "2rem",
            }}
          >
            {/* Facebook */}
            <Button
              href="#!"
              className="m-1"
              style={{
                color: "white",
                backgroundColor: "black",
                borderColor: "gold",
                borderRadius: "20%",
              }}
            >
              <i
                className="fa-brands fa-facebook fa-bounce"
                style={{ fontSize: "18px", padding: "5px" }}
              ></i>
            </Button>

            {/* Instagram */}
            <Button
              href="#!"
              className="m-1"
              style={{
                fontSize: "15px",
                color: "white",
                backgroundColor: "black",
                borderColor: "gold",
              }}
            >
              <i
                className="fa-brands fa-instagram fa-bounce"
                style={{ fontSize: "18px", padding: "5px" }}
              ></i>
            </Button>

            {/* Whatsapp */}
            <Button
              href="#!"
              className="m-1"
              style={{
                fontSize: "15px",
                color: "white",
                backgroundColor: "black",
                borderColor: "gold",
              }}
            >
              <i
                className="fa-brands fa-whatsapp fa-bounce"
                style={{ fontSize: "18px", padding: "5px" }}
              ></i>
            </Button>

            {/* Google */}
            <Button
              href="#!"
              className="m-1"
              style={{
                fontSize: "15px",
                color: "white",
                backgroundColor: "black",
                borderColor: "gold",
              }}
            >
              <i
                className="fa-brands fa-google fa-bounce"
                style={{ fontSize: "18px", padding: "5px" }}
              ></i>
            </Button>
          </Col>

          {/* CopyRights */}
          <Col
            xs={12}
            sm={12}
            md={5}
            style={{
              backgroundColor: "white",
              paddingTop: "2rem",
              paddingBottom: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "gray",
                fontWeight: "500",
              }}
            >
              Blooming &#169; 2023. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Footer;
