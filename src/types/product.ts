export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "brownie" | "box" | "tub";
  description?: string;
  isBestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
