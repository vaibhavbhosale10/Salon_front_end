import React, { Fragment, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ContactService from "../../Services/ContactServices";
import { errorToast, successToast } from "../../Interface/Toast/Toast";

const ContactForm = () => {
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

  //
  const contactSchema = yup.object({
    firstName: yup.string().required("First name is required!").min(3).max(25),
    lastName: yup.string().required("Last name is required!").min(3).max(25),
    mobile: yup
      .string()
      .required("Contact Number is required!")
      .matches(/^[0-9]{10}$/)
      .min(10),
    email: yup.string().required("Email is required!"),
    message: yup.string().required("Message is required!"),
  });

  const {
    register,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const [contacts, setContacts] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContacts({ ...contacts, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    ContactService.createContact(contacts)
      .then((response) => {
        console.log(response);

        const message =
          response.data.message || "Thank you for reaching out to us!";
        successToast(message);
        reset();
      })
      .catch((err) => {
        console.log(err);
        const message =
          err?.response?.data.message || "Could not contact, please try again!";
        errorToast(message);
      });
  };

  return (
    <Fragment>
      <Container style={{ marginTop: "15px" }}>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            style={{
              marginBottom: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h4
              style={{
                color: "orange",
                fontFamily: "Delicious Handrawn,cursive",
              }}
            >
              Talk with us
            </h4>
            <h3 style={{ fontWeight: "bold" }}>Feel Free to Contact</h3>
          </Col>

          <Col xs={12} sm={12} md={8} lg={8}>
            <Form onSubmit={onSubmit}>
              {/* First Name, Last Name */}
              <Row style={{ justifyContent: "start" }}>
                {/* First Name */}
                <Col xs={12} sm={12} md={6} lg={6} style={{ marginBottom: 15 }}>
                  <Form.Control
                    style={{
                      border: "none",
                      backgroundColor: "#faf5ee",
                      fontSize: "16px",
                    }}
                    required
                    size="lg"
                    placeholder="First Name"
                    type="text"
                    id="firstName"
                    name="firstName"
                    label="firstName"
                    {...register("firstName")}
                    onChange={handleChange}
                    error={errors.firstName ? 1 : 0}
                    margin="dense"
                  />
                </Col>

                {/* Last Name */}
                <Col xs={12} sm={12} md={6} lg={6} style={{ marginBottom: 15 }}>
                  <Form.Control
                    style={{
                      border: "none",
                      backgroundColor: "#faf5ee",
                      fontSize: "16px",
                    }}
                    required
                    size="lg"
                    placeholder="Last Name"
                    type="text"
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    {...register("lastName")}
                    onChange={handleChange}
                    error={errors.lastName ? 1 : 0}
                    margin="dense"
                  />
                </Col>
              </Row>

              {/* Contact Number, Email Address */}
              <Row style={{ justifyContent: "start" }}>
                {/* Contact Number */}
                <Col xs={12} sm={12} md={6} lg={6} style={{ marginBottom: 15 }}>
                  <Form.Control
                    style={{
                      border: "none",
                      backgroundColor: "#faf5ee",
                      fontSize: "16px",
                    }}
                    required
                    size="lg"
                    placeholder="Contact Number"
                    type="mobile"
                    id="mobile"
                    name="mobile"
                    label="Mobile"
                    {...register("mobile")}
                    onChange={handleChange}
                    error={errors.mobile ? 1 : 0}
                    margin="dense"
                  />
                </Col>

                {/* Email Address */}
                <Col xs={12} sm={12} md={6} lg={6} style={{ marginBottom: 15 }}>
                  <Form.Control
                    style={{
                      border: "none",
                      backgroundColor: "#faf5ee",
                      fontSize: "16px",
                    }}
                    required
                    size="lg"
                    placeholder="Email Address"
                    type="email"
                    id="email"
                    name="email"
                    label="Email"
                    {...register("email")}
                    onChange={handleChange}
                    error={errors.email ? 1 : 0}
                    margin="dense"
                  />
                </Col>
              </Row>

              {/* Write Message */}
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  style={{
                    marginBottom: 10,
                  }}
                >
                  <Form.Control
                    style={{
                      border: "none",
                      backgroundColor: "#faf5ee",
                      fontSize: "16px",
                    }}
                    as="textarea"
                    rows={5}
                    placeholder="Write message"
                    size="lg"
                    type="text"
                    id="message"
                    name="message"
                    label="Message"
                    margin="dense"
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              {/* Submit Button */}
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  style={{
                    marginBottom: 15,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                  }}
                >
                  <Button
                    onMouseOver={changeView}
                    onMouseLeave={revertChange}
                    type="submit"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "start",
                      fontSize: "17px",
                      backgroundColor: "black",
                      borderColor: "gold",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                    }}
                  >
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ContactForm;
