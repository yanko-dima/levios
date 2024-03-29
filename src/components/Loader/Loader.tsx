import React from 'react';
import css from './Loader.module.css';

export const Loader: React.FC = () => {
  return (
    <>
      <div className={css.loaderWrap}>
        <h2>Loading...</h2>
      </div>
    </>
  );
};
