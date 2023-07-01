import { Fragment, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import Button from "react-bootstrap/esm/Button";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import WhyChooseBlooming from "./WhyChooseBlooming";
import Carousel from "react-multi-carousel";

const Home = () => {
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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1401 },
      items: 1,
    },

    xLarge: {
      breakpoint: { max: 1400, min: 1201 },
      items: 1,
    },
    large: {
      breakpoint: { max: 1200, min: 993 },
      items: 1,
    },
    medium: {
      breakpoint: { max: 992, min: 769 },
      items: 1,
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
      {/* Header */}
      <Header />

      {/* HomePage */}
      <Container
        fluid
        style={{
          padding: 0,
          margin: 0,
          position: "relative",
        }}
      >
        {/* <HomeCarousel /> */}

        <Carousel responsive={responsive} autoPlay infinite>
          <Col>
            <Image
              fluid
              style={{ width: "auto" }}
              src="/Images/HomePage1.jpg"
            />
          </Col>

          <Col>
            <Image
              fluid
              style={{ width: "auto" }}
              src="/Images/HomePage2.jpg"
            />
          </Col>

          <Col>
            <Image
              fluid
              style={{ width: "auto" }}
              src="/Images/HomePage3.jpg"
            />
          </Col>
        </Carousel>

        {/* <HomeCarousel /> */}

        {/* Book an appointment Button */}
        <Button
          href="/signup"
          variant="contained"
          onMouseOver={changeView}
          onMouseLeave={revertChange}
          style={{
            position: "absolute",
            color: "white",
            backgroundColor: "black",
            borderColor: "gold",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Book an Appointment
        </Button>
      </Container>

      {/* Why Choose Blooming */}
      <WhyChooseBlooming />

      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default Home;
