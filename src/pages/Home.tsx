import { useEffect, useState } from 'react';
import { Products } from '../cmponents/Products';
import { SearchBar } from '../cmponents/SearchBar';
import { IProduct } from '../models/IProducts';
import { getAllProducts, getVisibleProducts } from '../servises/getProducts';

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [submitSearch, setSubmitSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onSetSubmitSearch = (value: string) => {
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

  return (
    <div>
      <h1>Products</h1>
      <SearchBar onSetSubmitSearch={onSetSubmitSearch} />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Products products={getVisibleProducts(products, submitSearch)} />
      )}
    </div>
  );
}
