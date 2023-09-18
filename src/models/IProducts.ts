export interface IProduct {
  img: string;
  asin: string;
  price: string;
  bsr_category: string;
  link: string;
  name: string;
}

export interface IProducts {
  products: IProduct[];
}
