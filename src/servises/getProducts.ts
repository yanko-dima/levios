import { AxiosInstance } from '../api/AxiosInstance';
import { IProduct } from '../models/IProducts';
import { ISearchFormValues } from '../models/ISearch';

export const getAllProducts = async () => {
  try {
    const res = await AxiosInstance.get('');

    return res.data;
  } catch (error) {}
};

export const getVisibleProducts = (
  products: IProduct[],
  searchData: ISearchFormValues
) => {
  const { search, category } = searchData;

  if (search.length || category.length) {
    const searchOfName = products.filter(product =>
      product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    if (!category.length) {
      return searchOfName;
    } else {
      return searchOfName.filter(product =>
        product.bsr_category.includes(category)
      );
    }
  }

  return products;
};
