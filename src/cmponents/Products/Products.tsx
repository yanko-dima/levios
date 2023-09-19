import React from 'react';
import { Link } from 'react-router-dom';
import { IProducts } from '../../models/IProducts';
import css from './Products.module.css';

export const Products: React.FC<IProducts> = ({ products }) => {
  return (
    <>
      {products.length ? (
        <ul className={css.productsList}>
          {products.length &&
            products.map(product => (
              <li className={css.productItem} key={product.asin}>
                <img
                  className={css.productImage}
                  src={product.img}
                  alt={product.name}
                  width={250}
                />
                <div className={css.productName}>{product.name}</div>
                <div>Price: {product.price}</div>
                <div>Asin: {product.asin}</div>
                <div>Category: {product.bsr_category}</div>
                <div>
                  <Link to={product.link} target="blank">
                    Go to Amazon
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
