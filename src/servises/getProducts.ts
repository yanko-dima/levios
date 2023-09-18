import { AxiosInstance } from '../api/AxiosInstance';
import { IProduct } from '../models/IProducts';

export const getAllProducts = async () => {
  try {
    const res = await AxiosInstance.get('');

    return res.data;
  } catch (error) {}
};

export const getVisibleProducts = (
  products: IProduct[],
  searchValue: string
) => {
  if (searchValue.length) {
    const showedProducts = products.filter(product =>
      product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );

    return showedProducts;
  }

  return products;
};
