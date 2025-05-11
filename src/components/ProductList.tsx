import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import type { Product, Price, ProductListProps } from '../types';

const ProductList = ({ products, onAddToCart, onClearCart }: ProductListProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [hasClearedCart, setHasClearedCart] = useState(false);

  useEffect(() => {
    const clearCartParam = searchParams.get('clearCart');

    if (clearCartParam === 'true' && !hasClearedCart) {
      onClearCart();
      setSearchParams({ clearCart: '' });
      setHasClearedCart(true);
    } else if (clearCartParam === 'true') {
      setSearchParams({ clearCart: '' });
    }
  }, [searchParams, onClearCart, setSearchParams, hasClearedCart]);

  const formatPrice = (price: Price): string => {
    const fractionalPart = price.fractional.toString().padStart(2, '0');
    return `${price.main}.${fractionalPart} zł`;
  };

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
  };

  return (
    <div>
      <h1>Lista Produktów</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {formatPrice(product.price)}
            <button onClick={() => handleAddToCart(product)}>Dodaj do koszyka</button>
          </li>
        ))}
      </ul>
      <Link to="/cart">Przejdź do koszyka</Link>
    </div>
  );
};

export default ProductList;