import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images && images.map((imageUrl, index) => (
        <div key={index} className="p-px">
          <img src={imageUrl} alt={`media-${index}`} className="rounded" />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
