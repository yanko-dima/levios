import { AxiosInstance } from '../api/AxiosInstance';
import { IProduct } from '../models/IProducts';

export const getProducts = async () => {
  try {
    const res = await AxiosInstance.get('');

    return res.data['products'];
  } catch (error) {
    console.log('Error: ', (error as Error).message);
  }
};

export const getVisibleProducts = (
  products: IProduct[],
  searchParams: URLSearchParams
) => {
  const searchQuery = searchParams.get('search');
  const categoryQuery = searchParams.get('category');

  return products.filter(item => {
    const { name, bsr_category } = item;

    const productName = name.toLocaleLowerCase();
    const productCategory = bsr_category;

    if (searchQuery && categoryQuery)
      return (
        productName.includes(searchQuery) &&
        productCategory.includes(categoryQuery)
      );
    if (searchQuery && !categoryQuery) return productName.includes(searchQuery);
    if (categoryQuery && !searchQuery)
      return productCategory.includes(categoryQuery);

    return true;
  });
};
