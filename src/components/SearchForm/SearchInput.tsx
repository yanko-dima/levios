import React from 'react';
import { useField } from 'formik';
import css from './SearchForm.module.css';
import { ISearchInput } from '../../models/ISearch';

export const SearchInput: React.FC<ISearchInput> = ({ ...props }) => {
  const { name } = props;
  const [field, meta] = useField(name);

  return (
    <div className={css.inputWrapper}>
      <input className={css.input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={css.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};
