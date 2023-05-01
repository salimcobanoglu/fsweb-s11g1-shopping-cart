import React from "react";
import { ScProduct } from "./scParts";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const Product = (props) => {
  const { addItem } = useContext(AppContext);
  const { title, price, image } = props.product;

  return (
    <ScProduct>
      <img src={image} alt={`${title} book`} />
      <div className="details">
        <h1 className="title">{title}</h1>
        <div className="footer">
          <p className="price">${price}</p>
          <button onClick={() => addItem(props.product)}>Add to cart</button>
        </div>
      </div>
    </ScProduct>
  );
};

export default Product;
