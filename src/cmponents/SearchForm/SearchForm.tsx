import React from 'react';
import { ISearchForm, ISearchFormValues } from '../../models/ISearch';
import { Formik, Form } from 'formik';
import { validationSchema } from '../../servises/formValidation';
import { SearchInput } from './SearchInput';
import { SearchSelect } from './SearchSelect';
import css from './SearchForm.module.css';
import { useSearchParams } from 'react-router-dom';

export const SearchForm: React.FC<ISearchForm> = ({
  onSetSubmitSearch,
  categories,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  const categoryQuery = searchParams.get('category');

  const initialValues: ISearchFormValues = {
    search: searchQuery ? searchQuery : '',
    category: categoryQuery ? categoryQuery : '',
  };

  const handleSubmit = (values: ISearchFormValues) => {
    const { search, category } = values;

    onSetSubmitSearch(search.trim(), category);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <SearchInput
            name="search"
            type="search"
            placeholder="Enter search text"
          />
          <SearchSelect name="category">
            <option value="">Select a product category</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </SearchSelect>

          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </>
  );
};
