import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import { validationSchema } from '../../servises/formValidation';
import { SearchInput } from './SearchInput';
import { SearchSelect } from './SearchSelect';
import { ISearchForm, ISearchFormValues } from '../../models/ISearch';
import css from './SearchForm.module.css';

export const SearchForm: React.FC<ISearchForm> = ({
  onSetSubmitSearch,
  categories,
}) => {
  const { t } = useTranslation();
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
            placeholder={t('enter_search_text')}
          />
          <SearchSelect name="category">
            <option value="">{t('select_product_category')}</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </SearchSelect>

          <button className={css.button} type="submit">
            {t('search')}
          </button>
          <button
            type="button"
            className={css.buttonClear}
            onClick={() => setSearchParams({})}
          >
            {t('clear_filter')}
          </button>
        </Form>
      </Formik>
    </>
  );
};
