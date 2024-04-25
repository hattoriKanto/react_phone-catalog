import { Product } from '../types/Product';

type PropsParams = {
  data: Product[];
  query: string | null;
  minPrice: string;
  maxPrice: string;
};

export const getFilter = ({ data, query, minPrice, maxPrice }: PropsParams) => {
  const normalizedQuery = query?.trim().toLowerCase();
  let preparedProducts = [...data];
  
  if (normalizedQuery) {
    preparedProducts = preparedProducts.filter(product => (
      product.name.toLowerCase().includes(normalizedQuery)
    ));
  }

  if (minPrice && maxPrice) {
    preparedProducts = preparedProducts.filter(product => (
      product.price >= Number(minPrice) && product.price <= Number(maxPrice)
    ));
  }

  return preparedProducts;
};
