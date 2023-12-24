import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import imagesDate from "../assets/Date/imagesDate";
import CardDemosntrativo from "./CardDemosntrativo";
import styles from "./styles/ApresentacaoDeProdutos.module.css";

export default function ApresentacaoDeProdutos() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1813,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className={ styles.slidesMain }>
      <h3>Algumas de nossas artes</h3>
      <div className={ styles.global }>
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
