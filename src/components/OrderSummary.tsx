import React from 'react';
import { Link } from 'react-router-dom';
import type { CartItem, OrderSummaryProps } from '../types';

const OrderSummary = ({ cartItems }: OrderSummaryProps) => {
  const formatPrice = (price: { main: number; fractional: number }): string => {
    const fractionalPart = price.fractional.toString().padStart(2, '0');
    return `${price.main}.${fractionalPart} zł`;
  };

  const cartTotal = cartItems.reduce((sum, item) => {
    return sum + (item.price.main + item.price.fractional / 100) * item.quantity;
  }, 0);

  const handlePlaceOrder = () => {
    const orderData = {
      items: cartItems.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: formatPrice(item.price),
        subtotal: (item.price.main + item.price.fractional / 100) * item.quantity,
      })),
      total: cartTotal,
    };
    localStorage.setItem('lastOrder', JSON.stringify(orderData));
    window.location.href = '/order-confirmation.html';
  };

  return (
    <div>
      <h1>Podsumowanie Zamówienia</h1>
      {cartItems.length === 0 ? (
        <p>Twój koszyk jest pusty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - Ilość: {item.quantity} x {formatPrice(item.price)} = {(
                (item.price.main + item.price.fractional / 100) * item.quantity
              ).toFixed(2)} zł
            </li>
          ))}
          <strong>Łączny koszt: {cartTotal.toFixed(2)} zł</strong>
        </ul>
      )}
      <button onClick={handlePlaceOrder}>Złóż Zamówienie</button> 
      <Link to="/cart">Powrót do koszyka</Link>
    </div>
  );
};

export default OrderSummary;