import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import OrderSummary from './components/OrderSummary';
import type { Product, CartItem } from './types';
import productsData from './data/products.json';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const changeQuantity = (productId: number, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router basename="/e-commerce-app/">
      <Routes>
        <Route path="/" element={<ProductList
          products={productsData}
          onAddToCart={addToCart}
          onClearCart={clearCart} />} />
        <Route path="/cart" element={<ShoppingCart
          cartItems={cartItems}
          onRemoveFromCart={removeFromCart}
          onQuantityChange={changeQuantity} />} />
        <Route path="/order-summary" element={<OrderSummary cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;