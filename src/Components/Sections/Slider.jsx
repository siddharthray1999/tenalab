import Carousel from "react-bootstrap/Carousel";
import Tenaciti from "./Tenaciti.jpg";
import Tenaciti2 from "./Tenaciti2.jpg";
import Tenaciti3 from "./Tenaciti3.jpg";

function UncontrolledExample() {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="slider-image" data-interval="false">
          <img
            style={{
              width: "100%",
              height: "800px",
              backgroundPosition: "cover",
            }}
            src={Tenaciti}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="slider-image">
          <img
            style={{
              width: "100%",
              height: "800px",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="d-block w-100"
            src={Tenaciti3}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="slider-image">
          <img
            style={{ width: "100%", height: "800px" }}
            className="d-block w-100"
            src={Tenaciti2}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
