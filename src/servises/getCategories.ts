import { IProduct } from '../models/IProducts';

export const getCategories = (products: IProduct[]) => {
  return [...new Set(products.map(product => product.bsr_category))];
};
