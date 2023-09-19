import { useEffect, useState } from 'react';
import { Products } from '../cmponents/Products/Products';
import { SearchForm } from '../cmponents/SearchForm/SearchForm';
import { getAllProducts, getVisibleProducts } from '../servises/getProducts';
import { getCategories } from '../servises/getCategories';
import { IProduct } from '../models/IProducts';
import { ISearchFormValues } from '../models/ISearch';
import { PageTitle } from '../cmponents/Title/PageTitle';

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [submitSearch, setSubmitSearch] = useState<ISearchFormValues>({
    search: '',
    category: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const categories = getCategories(products);

  const onSetSubmitSearch = (search: string, category: string) => {
    setSubmitSearch({ search, category });
  };

  useEffect(() => {
    getAllProducts()
      .then(res => {
        const fetchProducts = res['products'];

        setProducts(fetchProducts);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {}, []);

  return (
    <div>
      <PageTitle text="Products" />
      <SearchForm
        onSetSubmitSearch={onSetSubmitSearch}
        categories={categories}
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Products products={getVisibleProducts(products, submitSearch)} />
      )}
    </div>
  );
}
