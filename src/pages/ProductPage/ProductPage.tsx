import { FC } from 'react';
import useFetchData from '../../utils/useFetchData';
import { useLocation } from 'react-router-dom';
import { ProductExpanded } from '../../types/ProductExpanded';

export const ProductPage: FC = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[1];
  const prodId = location.pathname.split('/')[2];
  const { data, isLoading, error } = useFetchData<ProductExpanded>(
    `${category}.json`,
  );

  const product = data.find(prod => prod.id === prodId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <></>;
};
