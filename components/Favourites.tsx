import React, { useState, useEffect } from "react";
import productList from "../public/products.json";
import Product from "./Product";

const Favourites = () => {
  const [products, setProducts] = useState<
    { id: number; title: string; image: string; alt: string; price: number }[]
  >([]);

  useEffect(() => {
    setProducts(productList);
  }, []);

  return (
    <div className='mt-6'>
      <h3 className='subtitle mb-3'>Favoriler</h3>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8'>
        {products.length &&
          products.map(({ id, title, image, alt, price }) => (
            <Product
              key={String(id)}
              title={title}
              alt={alt}
              price={price}
              image={image}
            />
          ))}
      </div>
    </div>
  );
};

export default Favourites;
