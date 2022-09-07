export interface IProduct {
  id: string;
  name: string;
  quantity: number;
  price: number;
  typeTrans?: string;
  ref?: string;
}

export interface ITrans {
  id?: string;
  cost?: number;
  quantity: number;
  transType: string;
  status: string;
  product: IProduct;
}

export interface IItem {
  name: string;
  quantity: number;
}
