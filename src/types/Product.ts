export type Description = {
  title: string;
  text: string[];
};

export interface Product {
  id: number;
  category: string;
  slug: string;
  name: string;
  color: string;
  price: number;
  fullPrice: number;
  screen: string;
  capacity: string;
  ram: string;
  images: string[];
}

export interface ProductExpanded extends Product {
  namespaceId: string;
  capacityAvailable: string[];
  colorsAvailable: string[];
  description: Description[];
  resolution: string;
  processor: string;
  camera?: string | null;
  zoom?: string | null;
  cell: string[];
}
