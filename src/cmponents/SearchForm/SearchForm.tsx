import React, { useEffect } from 'react';
import { ISearchForm, ISearchFormValues } from '../../models/ISearch';
import { Formik, Form, useFormik, useFormikContext, FormikProps } from 'formik';
import { validationSchema } from '../../servises/formValidation';
import { SearchInput } from './SearchInput';
import { SearchSelect } from './SearchSelect';
import css from './SearchForm.module.css';

// const categoriesOptions = [{ value: '', label: '' }];

export const SearchForm: React.FC<ISearchForm> = ({ onSetSubmitSearch }) => {
  const initialValues: ISearchFormValues = { search: '', category: '' };
  const {
    values,
    errors,
    isSubmitting,
    submitForm,
    handleChange, // handleSubmit,
  }: FormikProps<ISearchFormValues> = useFormik<ISearchFormValues>({
    initialValues,
    onSubmit: () => {},
    validationSchema,
  });

  const handleSubmit = (values: ISearchFormValues) => {
    const { search, category } = values;

    onSetSubmitSearch(search.trim(), category);
  };

  // console.log('values: ', values);

  return (
    <>
      <Formik
        initialValues={initialValues}
        // onSubmit={handleSubmit}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('values: ', values);
        }}
      >
        <Form className={css.form}>
          <SearchInput
            name="search"
            type="search"
            placeholder="Enter search text"
          />
          <SearchSelect name="category">
            <option value="">Select a product category</option>
            <option value="">Category 1</option>
            <option value="">Category 2</option>
            <option value="">Category 3</option>
          </SearchSelect>

          <button
            className={css.button}
            type="submit"
            // disabled={isSubmitting}
          >
            Search
          </button>
        </Form>
      </Formik>

      {/*<form   >*/}

      {/*<button*/}
      {/*className={css.button}*/}
      {/*type="submit"*/}
      {/*// disabled={isSubmitting}*/}
      {/*>*/}
      {/*Search*/}
      {/*</button>*/}
      {/*</form>*/}
    </>
  );
};
