export enum Category {
  AUTOMOTIVE = 'Automotive',
  INDUSTRIAL = 'Industrial',
  HOME = 'Home',
  OFFICE = 'Office'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  isCustomPrice: boolean; // If true, display as "Starting at..." or "Contact for Price"
  image: string;
  shortDescription: string;
  fullDescription: string;
  specs: Record<string, string>;
  rating: number;
  reviewCount: number;
  warranty: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type OrderStatus = 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';

export interface Order {
  id: string;
  date: string;
  customerName: string;
  phone: string;
  email?: string;
  address: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
}
