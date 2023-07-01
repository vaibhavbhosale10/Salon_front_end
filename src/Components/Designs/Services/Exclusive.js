import { Box, Paper } from "@mui/material";
import { ButtonGroup, Col, Container, Image, Row } from "react-bootstrap";
import "./ExclusiveStyle.css";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React, { Fragment } from "react";
import Modal from "react-bootstrap/Modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import { errorToast, successToast } from "../../Interface/Toast/Toast";
import AppointmentService from "../../Services/AppointmentServices";
import { Link, useNavigate } from "react-router-dom";
import { linkStyle } from "../Header/Header";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../App/Slices/AuthSlice";

const Exclusive = () => {
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

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.string().required(),
    date: yup.date().required(),
    time: yup.string().required(),
    services: yup.array().min(1).required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [appointment, setAppointment] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    date: "",
    time: "",
    services: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(removeUser());
    navigate("/login");
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    AppointmentService.createAppointment(appointment)
      .then((response) => {
        console.log(response);
        const message =
          response.data.message ||
          "Appointment created ....See you at the salon!";
        successToast(message);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        const message =
          err?.response?.data.message ||
          "Could not book appointment, please try again!";
        errorToast(message);
      });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const HairTreatments = [
    {
      Title: "Hair Coloring",
      Description:
        "Hair coloring can transform your locks from ordinary to extraordinary, adding depth, dimension, ",
      Avatar: "/Images/HairColoringWomen.jpg",
    },
    {
      Title: "Head Massage",
      Description:
        "Our skilled therapists use the perfect blend of techniques to ease tension, improve circulation, and leave you feeling rejuvenated. ",
      Avatar: "/Images/HeadMassage.jpg",
    },
    {
      Title: "Pre-Lightening",
      Description:
        "Service or process required to be done before depositing any colour incase hair is dark pigemented.",
      Avatar: "/Images/PreLightening.jpg",
    },
    {
      Title: "Deep Conditioning",
      Description:
        " This is a treatment that is designed to nourish and hydrate dry, damaged hair. It usually involves leaving a conditioner on the hair for a longer period of time than usual.",
      Avatar: "/Images/DeepConditioning.jpeg",
    },
    {
      Title: "Keratin Treatment",
      Description:
        " This is a semi-permanent hair straightening treatment that uses a combination of keratin protein and heat to smooth and straighten frizzy or curly hair.",
      Avatar: "/Images/KeratinTreatment.jpg",
    },
    {
      Title: "Hair Mask",
      Description:
        "A hair mask is a treatment that is designed to deeply condition and nourish the hair.",
      Avatar: "/Images/HairMask.avif",
    },
    {
      Title: "Facial",
      Description:
        " Treatment that typically involves cleansing, exfoliating, and moisturizing the face. Depending on the type of facial, it may also involve steam, masks, or massage. ",
      Avatar: "/Images/Facial.jpg",
    },
    {
      Title: "Botox",
      Description:
        "His is a treatment that involves injecting a small amount of botulinum toxin into the skin. It can help to reduce the appearance of fine lines and wrinkles.",
      Avatar: "/Images/Botox.jpg",
    },
    {
      Title: "Manicures and Pedicures",
      Description:
        "His includes nail care services such as filing, shaping, polishing, and cuticle care.",
      Avatar: "/Images/Manicure&Pedicure.jpg",
    },
  ];

  return (
    <Fragment>
      {/* Header */}
      <Header />

      {/* Unlock unbeatable deals with our exclusive offers! */}

      <Container style={{ marginTop: "15px" }}>
        <Row>
          <Col style={{ display: "flex", justifyContent: "end" }}>
            <Button
              onMouseOver={changeView}
              onMouseLeave={revertChange}
              onClick={handleLogout}
            >
              Logout
            </Button>
            {/* <Image
                  thumbnail
                  style={{
                    width: "40px",
                    height: "40px",
                    marginLeft: "10px",
                  }}
                  alt="171x180"
                  src="/Images/Avatar.jpg"
                  roundedCircle
                /> */}
          </Col>
          <Col xs={12}>
            <h4
              style={{
                color: "orange",
                fontFamily: "Hand-Drawn,cursive",
              }}
            >
              Unlock unbeatable deals with our exclusive offers!
            </h4>
            <h4 style={{ fontWeight: "bold" }}>Our Exclusive Offers</h4>
          </Col>
        </Row>
      </Container>

      <Container fluid style={{ marginTop: "15px" }}>
        <Paper elevation={6} style={{ padding: 20 }}>
          <Row>
            {HairTreatments.map((member, index) => (
              <Col
                key={index}
                xs={12}
                sm={12}
                md={6}
                lg={4}
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Paper className="flip-card" style={{ height: "300px" }}>
                  <Box className="flip-card-inner">
                    <Box className="flip-card-front">
                      <Paper elevation={6} style={{ height: "300px" }}>
                        <Image
                          style={{
                            height: "300px",
                            width: "300px",
                            marginBottom: "20px",
                          }}
                          fluid
                          className="image"
                          variant="top"
                          src={member.Avatar}
                        />
                      </Paper>
                    </Box>
                    <Box className="flip-card-back">
                      <Paper style={{ height: "300px" }}>
                        <h4 style={{ paddingTop: "20px", fontWeight: "600" }}>
                          {member.Title}
                        </h4>

                        <p style={{ padding: 5 }}>{member.Description}</p>

                        <Button
                          onClick={handleShow}
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
                          Book Now
                        </Button>
                      </Paper>
                    </Box>
                  </Box>
                </Paper>
              </Col>
            ))}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title
                  style={{
                    fontSize: "30px",
                    color: "orange",
                    fontFamily: "Delicious Handrawn,cursive",
                  }}
                >
                  Schedule Your Appointment
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form method="POST" onSubmit={onSubmit}>
                  <Form.Group>
                    <Form.Control
                      style={{
                        border: "none",
                        backgroundColor: "#faf5ee",
                        fontSize: "16px",
                        marginBottom: 15,
                      }}
                      required
                      size="lg"
                      placeholder="First Name"
                      type="text"
                      {...register("firstName")}
                      onChange={handleChange}
                    />
                    {errors.firstName && (
                      <Form.Text className="text-danger">
                        {errors.firstName.message}
                      </Form.Text>
                    )}
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      style={{
                        border: "none",
                        backgroundColor: "#faf5ee",
                        fontSize: "16px",
                        marginBottom: 15,
                      }}
                      required
                      size="lg"
                      placeholder="Last Name"
                      type="text"
                      {...register("lastName")}
                      onChange={handleChange}
                    />
                    {errors.lastName && (
                      <Form.Text className="text-danger">
                        {errors.lastName.message}
                      </Form.Text>
                    )}
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      style={{
                        border: "none",
                        backgroundColor: "#faf5ee",
                        fontSize: "16px",
                        marginBottom: 15,
                      }}
                      required
                      size="lg"
                      type="tel"
                      placeholder="Mobile"
                      {...register("mobile")}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <Form.Text className="text-danger">
                        {errors.phone.message}
                      </Form.Text>
                    )}
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      style={{
                        border: "none",
                        backgroundColor: "#faf5ee",
                        fontSize: "16px",
                        marginBottom: 15,
                      }}
                      required
                      size="lg"
                      placeholder="Select Date"
                      type="date"
                      {...register("date")}
                      onChange={handleChange}
                    />
                    {errors.date && (
                      <Form.Text className="text-danger">
                        {errors.date.message}
                      </Form.Text>
                    )}
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      style={{
                        border: "none",
                        backgroundColor: "#faf5ee",
                        fontSize: "16px",
                        marginBottom: 15,
                      }}
                      required
                      size="lg"
                      type="time"
                      placeholder="Select Time"
                      {...register("time")}
                      onChange={handleChange}
                    />
                    {errors.time && (
                      <Form.Text className="text-danger">
                        {errors.time.message}
                      </Form.Text>
                    )}
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Services</Form.Label>
                    <Form.Check
                      type="checkbox"
                      label="Haircut"
                      {...register("services")}
                      onChange={handleChange}
                      value="haircut"
                      multiple="multiple"
                    />
                    <Form.Check
                      type="checkbox"
                      label="Coloring"
                      {...register("services")}
                      onChange={handleChange}
                      value="coloring"
                      multiple="multiple"
                    />
                    <Form.Check
                      type="checkbox"
                      label="Manicure"
                      {...register("services")}
                      onChange={handleChange}
                      value="manicure"
                      multiple="multiple"
                    />
                    {errors.services && (
                      <Form.Text className="text-danger">
                        {errors.services.message}
                      </Form.Text>
                    )}
                  </Form.Group>
                  <Modal.Footer>
                    <Button
                      onMouseOver={changeView}
                      onMouseLeave={revertChange}
                      onChange={handleChange}
                      type="submit"
                      style={{
                        marginTop: 5,
                        color: "white",
                        backgroundColor: "black",
                        border: "1px solid gold",
                        padding: 5,
                      }}
                    >
                      Book Appointment
                    </Button>
                    <Button
                      onClick={handleClose}
                      onMouseOver={changeView}
                      onMouseLeave={revertChange}
                      style={{
                        marginTop: 5,
                        color: "white",
                        backgroundColor: "black",
                        border: "1px solid gold",
                        padding: 5,
                        marginLeft: 5,
                      }}
                      variant="secondary"
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Form>
              </Modal.Body>
            </Modal>
          </Row>
        </Paper>
      </Container>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default Exclusive;
