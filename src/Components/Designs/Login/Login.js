import Paper from "@mui/material/Paper";
import React, { Fragment, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AuthService from "../../Services/AuthService";
import { addUser } from "../../App/Slices/AuthSlice";
import { errorToast } from "../../Interface/Toast/Toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  const userSchema = yup.object({
    email: yup.string().required("Email is required!"),
    password: yup.string().required("Password is required!"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // generate request
    AuthService.userLogin(user)
      .then((response) => {
        console.log("Response: ", response);

        // add the user in redux state
        dispatch(addUser(response?.data?.data));

        // store the token in sessionStorage
        sessionStorage.setItem(
          "accessToken",
          response.headers["x-accesstoken"]
        );

        sessionStorage.setItem(
          "refreshToken",
          response.headers["x-refreshtoken"]
        );

        navigate("/exclusive");
      })
      .catch((err) => {
        console.log(err);
        const message =
          err?.response?.data.message ||
          "Could not create an account, please try again!";
        errorToast(message);
      });
  };

  return (
    <Fragment>
      <Container>
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <Col xs={11} sm={10} md={10} lg={5}>
            <Paper elevation={6} style={{ backgroundColor: "white" }}>
              <Row>
                <Col style={{ paddingTop: "20px" }}>
                  <h4 style={{ fontWeight: "600" }}>Log into </h4>
                  <a href="/home" style={{ textDecoration: "none" }}>
                    <h2
                      style={{
                        color: "orange",
                        fontFamily: "Delicious Handrawn,cursive",
                      }}
                    >
                      Blooming
                    </h2>
                  </a>
                </Col>
              </Row>

              <Row style={{ padding: "20px" }}>
                <Form onSubmit={onSubmit}>
                  <Col style={{ marginBottom: "15px" }}>
                    <Form.Control
                      style={{
                        border: "none",
                        backgroundColor: "#faf5ee",
                        fontSize: "16px",
                      }}
                      autoFocus
                      required
                      size="lg"
                      placeholder="Email Address"
                      id="email"
                      name="email"
                      label="Email"
                      type="email"
                      margin="dense"
                      {...register("email")}
                      onChange={handleChange}
                      error={errors.email ? 1 : 0}
                    />
                  </Col>

                  <Col style={{ marginBottom: "15px" }}>
                    <Form.Control
                      style={{
                        border: "none",
                        backgroundColor: "#faf5ee",
                        fontSize: "16px",
                      }}
                      required
                      autoComplete="on"
                      size="lg"
                      placeholder="Password"
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      margin="dense"
                      {...register("password")}
                      onChange={handleChange}
                      error={errors.password ? 1 : 0}
                    />
                  </Col>

                  <Col style={{ marginBottom: "15px" }}>
                    <Button
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
                      disabled={!user.email || !user.password}
                    >
                      Login
                    </Button>
                  </Col>

                  <Col style={{ marginBottom: "15px" }}>
                    <h6>
                      Not User?
                      <a
                        href="/signup"
                        style={{ textDecoration: "none", marginLeft: "5px" }}
                      >
                        Sign Up
                      </a>
                    </h6>
                  </Col>
                </Form>
              </Row>
            </Paper>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Login;
