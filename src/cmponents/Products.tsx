import { Link } from 'react-router-dom';
import { IProducts } from '../models/IProducts';
import React from 'react';

export const Products: React.FC<IProducts> = ({ products }) => {
  return (
    <>
      {products.length ? (
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {products.length &&
            products.map(product => (
              <li key={product.asin} style={{ maxWidth: 280 }}>
                <img src={product.img} alt={product.name} width={250} />
                <div>{product.name}</div>
                <div>Price: {product.price}</div>
                <div>Asin: {product.asin}</div>
                <div>Category: {product.bsr_category}</div>
                <div>
                  <Link to={product.link} target="blank">
                    Amazon link
                  </Link>
                </div>
              </li>
            ))}
        </ul>
      ) : (
        <p>Products not found!</p>
      )}
    </>
  );
};
