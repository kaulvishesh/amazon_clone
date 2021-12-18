import React from "react";
import "./Product.css";
import { UseStateValue } from "./StateProvider";
function product({ id, title, image, price, rating }) {
  const[{basket}, dispatch] = UseStateValue();
  const AddToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      },
    });

  }
  return (
    <div className="product">
      <div className="product__Info">
        <p>{title}</p>
        <p className="product__Price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__Rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img
        src={image}
      ></img>
      <button onClick={AddToBasket}>Add to basket</button>
    </div>
  );
}

export default product;
