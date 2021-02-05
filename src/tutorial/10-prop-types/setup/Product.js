import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ name, image, price }) => {
  return (
    <article className="product">
      <img src={image.url} alt={name}></img>
      <h4>{name}</h4>
      <p>{price}</p>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
};

Product.defaultProps = {
  name: "default Product",
  price: 4.99,
  image: { url: defaultImage },
};

export default Product;
