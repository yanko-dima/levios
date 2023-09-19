import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Products } from '../cmponents/Products/Products';
import { SearchForm } from '../cmponents/SearchForm/SearchForm';
import { getProducts, getVisibleProducts } from '../servises/getProducts';
import { getCategories } from '../servises/getCategories';
import { PageTitle } from '../cmponents/Title/PageTitle';
import { Loader } from '../cmponents/Loader/Loader';
import { IProduct } from '../models/IProducts';
import { ISearchFormValues } from '../models/ISearch';

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [submitSearch, setSubmitSearch] = useState<ISearchFormValues>({
    search: '',
    category: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchParams, setSearchParams] = useSearchParams();

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
    <div>
      <PageTitle text="Products" />
      <SearchForm
        onSetSubmitSearch={onSetSubmitSearch}
        categories={categories}
      />
      {isLoading && <Loader />}
      {!isLoading && (
        <Products products={getVisibleProducts(products, searchParams)} />
      )}
    </div>
  );
}
