import CardDemosntrativo from "./CardDemosntrativo";
import Title from "./Title";
import imagesDate from "../assets/Date/imagesDate";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function ApresentacaoDeProdutos() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1813,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1458,
  };

  return (
    <div >
      <div className="title-cardApresentacao">
      <Title name="Alguns dos Meus Trabalhos" />
      <div className="arrow">
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
      </div>
      <div className="bgGlobal">
        <Slider {...settings}>
          {imagesDate.map((image) => (
            <div key={image.name}>
              <CardDemosntrativo
                productImage={image.image}
                // productName={image.name}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
