import { Product } from './Product';

export const FilterCallback = {
  HotPrices: (product: Product) => {
    const { price, fullPrice } = product;
    const percent = Math.round(((fullPrice - price) / price) * 100);
    return percent > 15;
  },
  NewModels: ({ year }: Product) => year === 2022,
};
