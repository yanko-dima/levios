import React from 'react';
import { useField } from 'formik';
import css from './SearchForm.module.css';

export const SearchSelect = ({ ...props }) => {
  const { name } = props;
  const [field, meta] = useField(name);

  return (
    <div>
      <select className={css.select} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={css.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};
