import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../../json/Testimonials";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };
  return (
    <div className="testimonial-carousel-container">
      <h2>What Our Clients Say </h2>
      <Slider {...settings}>
        {" "}
        {testimonials.map((testimon) => {
          return (
            <div key={testimon.id} className="testimonial-card">
              <img src={testimon.image} className="testimonial-image" alt="" />
              <p className="testimonial-text">{testimon.text}</p>
              <h4 className="testimonial-name">{testimon.name}</h4>
              <p className="testimonial-position">{testimon.position}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonial;
