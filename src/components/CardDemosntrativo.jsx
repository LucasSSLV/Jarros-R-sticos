import React from "react";
import Title from "./Title";
import PropTypes from "prop-types";
import ".././index.css";

export default function CardDemosntrativo({
  productImage,
  // productName,
}) {
  return (
    <div>
      <img
        className="product-image"
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
