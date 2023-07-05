import React, { useContext } from "react";
import ProductProvider from "../../productsContext/ProductContext";

const Card = () => {
  const { products } = useContext(ProductProvider);
  return (
    <h1>hello</h1>
    // <div className="card">
    //   {/* <img src={} alt={} className="card-image" />
    //   <h3 className="card-title">{product.name}</h3>
    //   <p className="card-price">${product.price}</p>
    //   <button className="card-button">Add to Cart</button> */}
    //   h
    // </div>
  );
};

export default Card;
