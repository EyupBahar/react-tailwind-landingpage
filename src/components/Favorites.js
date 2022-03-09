import { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import Products from "../api/products.json";
import ProductItem from "../components/ui/ProductItem";

const Favorites = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div className="container mx-auto">
      <Title>Favoriler</Title>
      <div className="grid grid-cols-3 gap-0.1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 bg-white rounded-lg overflow-hidden">
        {products?.length &&
          products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Favorites;
