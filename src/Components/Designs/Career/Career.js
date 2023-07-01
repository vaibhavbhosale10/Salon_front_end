import React, { Fragment, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import Header from "../Header/Header";
import CareerCard from "../Career/CareerCard";
import Footer from "../Footer/Footer";
import { Paper } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Country, State, City } from "country-state-city";
import ResumeServices from "../../Services/ResumeServices";
import { errorToast, successToast } from "../../Interface/Toast/Toast";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const [resume, setResume] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    country: "",
    city: "",
    state: "",
    country: "",
    resume: "",
  });

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const jobApplySchema = yup.object({
    firstName: yup.string().required("First Name is required!").min(3).max(25),
    lastName: yup.string().required("Last Name is required!").min(3).max(25),
    email: yup.string().required("Email is required!"),

    city: yup
      .string()
      .required("City is Required!")
      .min(1, "Too short!")
      .max(45, "Too long!"),
    state: yup
      .string()
      .required("State is Required!")
      .min(1, "Too short!")
      .max(45, "Too long!"),
    country: yup
      .string()
      .required("Country is Required!")
      .min(1, "Too short!")
      .max(45, "Too long"),
  });

  const initialApplication = {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    country: "",
    resume: "",
  };

  const {
    register,
    formState: { errors },
  } = useForm({
    initialApplication,
    resolver: yupResolver(jobApplySchema),
    mode: "onChange",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResume({ ...resume, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    ResumeServices.createResume(resume)
      .then((response) => {
        console.log(response);

        const message =
          response.data.message ||
          "Thank you..our team will connect with you soon";
        successToast(message);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        const message =
          err?.response?.data.message ||
          "Could not upload resume, please try again!";
        errorToast(message);
      });
  };

  const countryCode = "IN";
  const stateCode = "MH";

  const countries = Country.getAllCountries();
  const states = State.getStatesOfCountry(countryCode);
  const cities = City.getCitiesOfState(countryCode, stateCode);

  return (
    <Fragment>
      {/* Header */}
      <Header />

      {/* Career Banner */}
      <Container>
        <Row>
          <Paper
            elevation={6}
            style={{
              padding: 2,
              position: "relative",
              backgroundImage:
                "url(https://www.incimages.com/uploaded_files/image/1920x1080/getty_495142964_198701.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              // backgroundPosition: "center",
              height: 400,
              width: "100%",
            }}
          >
            {/* Contents shown on the Banner  */}
            <Row>
              <Col style={{ position: "absolute", padding: 30 }}>
                <h1 style={{ color: "white" }}>
                  Join Us in Creating Beauty Every Day.
                </h1>
                <p style={{ marginTop: 10, color: "white", fontWeight: 300 }}>
                  We're hiring a skilled Hair Artists to help us drive success.
                </p>

                <Button
                  onClick={handleShow}
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
                  Click Here to Apply
                </Button>
              </Col>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title
                    style={{
                      color: "orange",
                      fontFamily: "Hand-Drawn,cursive",
                    }}
                  >
                    Send us your resume
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                    {/* First Name, Last Name */}
                    <Row style={{ justifyContent: "start" }}>
                      {/* First Name */}
                      <Col
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        style={{ marginBottom: 15 }}
                      >
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
                        />
                      </Col>

                      {/* Last Name */}
                      <Col
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        style={{ marginBottom: 15 }}
                      >
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
                          label="lastName"
                          {...register("lastName")}
                          onChange={handleChange}
                          error={errors.lastName ? 1 : 0}
                        />
                      </Col>
                    </Row>

                    {/* Contact Number */}
                    <Col xs={12} sm={12} style={{ marginBottom: 15 }}>
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
                        label="mobile"
                        {...register("mobile")}
                        onChange={handleChange}
                        error={errors.mobile ? 1 : 0}
                      />
                    </Col>

                    {/* Email Address */}
                    <Col xs={12} sm={12} style={{ marginBottom: 15 }}>
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
                        label="email"
                        {...register("email")}
                        onChange={handleChange}
                        error={errors.email ? 1 : 0}
                      />
                    </Col>

                    {/* Country */}
                    <Col xs={12} sm={12} style={{ marginBottom: 15 }}>
                      <Form.Select
                        style={{
                          border: "none",
                          backgroundColor: "#faf5ee",
                          fontSize: "16px",
                        }}
                        required
                        size="lg"
                        placeholder="Country"
                        type="select"
                        id="country"
                        name="country"
                        label="country"
                        {...register("country")}
                        onChange={handleChange}
                        error={errors.country ? 1 : 0}
                      >
                        <option value="">Select Country</option>
                        {countries.map((country, i) => (
                          <option key={country + i} value={country.id}>
                            {country.name}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>

                    {/* State */}
                    <Col xs={12} sm={12} style={{ marginBottom: 15 }}>
                      <Form.Select
                        style={{
                          border: "none",
                          backgroundColor: "#faf5ee",
                          fontSize: "16px",
                        }}
                        required
                        size="lg"
                        placeholder="State"
                        type="select"
                        id="state"
                        name="state"
                        label="state"
                        {...register("state")}
                        onChange={handleChange}
                        error={errors.state ? 1 : 0}
                      >
                        <option value="">Select State</option>
                        {states.map((state, i) => (
                          <option key={state + i} value={state.id}>
                            {state.name}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>

                    {/* City */}
                    <Col xs={12} sm={12} style={{ marginBottom: 15 }}>
                      <Form.Select
                        style={{
                          border: "none",
                          backgroundColor: "#faf5ee",
                          fontSize: "16px",
                        }}
                        required
                        size="lg"
                        placeholder="City"
                        type="select"
                        id="city"
                        name="city"
                        label="city"
                        {...register("city")}
                        onChange={handleChange}
                        error={errors.city ? 1 : 0}
                      >
                        <option value="">Select City</option>
                        {cities.map((city, i) => (
                          <option key={city + i} value={city.id}>
                            {city.name}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>

                    <Col xs={12} sm={12}>
                      <Form.Control
                        style={{
                          border: "none",
                          backgroundColor: "#faf5ee",
                          fontSize: "16px",
                          color: "black",
                          margin: "dense",
                        }}
                        required
                        size="lg"
                        placeholder="Resume"
                        type="file"
                        id="resume"
                        name="resume"
                        label="resume"
                        {...register("resume")}
                        onChange={handleChange}
                        error={errors.resume ? 1 : 0}
                        accept=".pdf"
                      />
                    </Col>

                    <Modal.Footer>
                      <Button
                        onChange={handleChange}
                        onClick={handleClose}
                        onMouseOver={changeView}
                        onMouseLeave={revertChange}
                        type="reset"
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
                        Close
                      </Button>

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
                        Submit
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal.Body>
              </Modal>
            </Row>
          </Paper>
        </Row>
      </Container>

      {/* Career Card */}
      <CareerCard />

      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default Career;
