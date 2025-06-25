import React from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <main className="home-page">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </main>
  );
};

export default Home;
