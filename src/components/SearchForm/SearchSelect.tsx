import React from 'react';
import { useField } from 'formik';
import css from './SearchForm.module.css';
import { ISearchSelect } from '../../models/ISearch';

export const SearchSelect: React.FC<ISearchSelect> = ({ ...props }) => {
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
