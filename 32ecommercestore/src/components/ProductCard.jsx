import React from "react";
import { useStore } from "../context/StoreContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useStore();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price.toFixed(2)}</p>
      <p className="product-desc">{product.description}</p>
      <button className="btn-add" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
