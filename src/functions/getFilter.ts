import { Product } from '../types/Product';

type PropsParams = {
  data: Product[];
  query: string | null;
};

export const getFilter = ({ data, query }: PropsParams) => {
  const normalizedQuery = query?.trim().toLowerCase();
  let preparedProducts = [...data];
  
  if (normalizedQuery) {
    preparedProducts = preparedProducts.filter(product => (
      product.name.toLowerCase().includes(normalizedQuery)
    ));
  }

  return preparedProducts;
};
