export interface Price {
  main: number;
  fractional: number;
}

export interface Product {
  id: number;
  name: string;
  price: Price;
}
export interface CartItem extends Product {
  quantity: number;
}

export interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onClearCart: () => void;
}

export interface ShoppingCartProps {
  cartItems: Product[];
}
export interface ShoppingCartPropsWithRemove extends ShoppingCartProps {
  onRemoveFromCart: (id: number) => void;
}
export interface ShoppingCartPropsWithQuantity extends ShoppingCartPropsWithRemove {
  onQuantityChange: (productId: number, quantity: number) => void;
  cartItems: CartItem[];
}

export interface OrderSummaryProps {
  cartItems: CartItem[];
}