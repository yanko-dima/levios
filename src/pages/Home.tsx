import { useEffect, useState } from 'react';
import { Products } from '../cmponents/Products';
import { SearchForm } from '../cmponents/SearchForm/SearchForm';
import { IProduct } from '../models/IProducts';
import { getAllProducts, getVisibleProducts } from '../servises/getProducts';

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [submitSearch, setSubmitSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onSetSubmitSearch = (value: string, category: string) => {
    setSubmitSearch(value);
  };

  useEffect(() => {
    getAllProducts()
      .then(res => {
        const fetchProducts = res['products'];

        setProducts(fetchProducts);
      })
      .finally(() => setIsLoading(false));
  }, []);

  // console.log('products: ', products);

  return (
    <div>
      <h1>Products</h1>
      <SearchForm onSetSubmitSearch={onSetSubmitSearch} />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Products products={getVisibleProducts(products, submitSearch)} />
      )}
    </div>
  );
}
