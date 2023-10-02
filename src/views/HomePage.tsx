import React, { useEffect, useState } from 'react';
import { PageTitle } from '../components/Title/PageTitle';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { Loader } from '../components/Loader/Loader';
import { Products } from '../components/Products/Products';
import { getProducts, getVisibleProducts } from '../servises/getProducts';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCategories } from '../servises/getCategories';
import { IProduct } from '../models/IProducts';
import { ISearchFormValues } from '../models/ISearch';

export const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [, setSubmitSearch] = useState<ISearchFormValues>({
    search: '',
    category: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const { t } = useTranslation();
  const categories = getCategories(products);

  const onSetSubmitSearch = (search: string, category: string) => {
    setSearchParams({ search, category });

    setSubmitSearch({
      search,
      category,
    });
  };

  useEffect(() => {
    getProducts()
      .then(res => res && setProducts([...res]))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <PageTitle text={t('title')} />
      <SearchForm
        onSetSubmitSearch={onSetSubmitSearch}
        categories={categories}
      />
      {isLoading && <Loader />}
      {!isLoading && (
        <Products products={getVisibleProducts(products, searchParams)} />
      )}
    </>
  );
};
