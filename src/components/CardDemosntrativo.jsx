import PropTypes from "prop-types";
import styles from "./styles/CardDemosntrativo.module.css";

export default function CardDemosntrativo({
  productImage,
  // productName,
}) {
  return (
    <div className={ styles.product }>
      <img
        className={ styles.productImage }
        src={productImage}
        alt={`product=${productImage}`}
      />
    </div>
  );
}

CardDemosntrativo.propTypes = {
  // productName: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  // instagramLink: PropTypes.string.isRequired,
  // whatsappNumber: PropTypes.string.isRequired,
};
