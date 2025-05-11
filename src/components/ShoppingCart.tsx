import React from 'react';
import { Link } from 'react-router-dom';
import type { CartItem, ShoppingCartPropsWithQuantity } from '../types';

const ShoppingCart = ({ cartItems, onRemoveFromCart, onQuantityChange }: ShoppingCartPropsWithQuantity) => {
    const formatPrice = (price: { main: number; fractional: number }): string => {
        const fractionalPart = price.fractional.toString().padStart(2, '0');
        return `${price.main}.${fractionalPart} zł`;
    };

    const cartTotal = cartItems.reduce((sum, item) => {
        return sum + (item.price.main + item.price.fractional / 100) * item.quantity;
    }, 0);


    if (cartItems.length === 0) {
        return (
            <div>
                <h1>Koszyk Zakupów</h1>
                <p>Twój koszyk jest pusty.</p>
                <Link to="/">Powrót do listy produktów</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>Koszyk Zakupów</h1>
            <ul>
                {cartItems.map((item) => {
                    const itemTotal = (item.price.main + item.price.fractional / 100) * item.quantity;
                    return (
                        <li key={item.id}>
                            {item.name} - {formatPrice(item.price)}
                            <div>
                                Ilość: <input type="number" min="1"
                                    value={item.quantity}
                                    onChange={(e) => {
                                        const quantity = parseInt(e.target.value, 10);
                                        onQuantityChange(item.id, quantity);
                                    }} />
                            </div>
                            <strong>Suma częściowa: {itemTotal.toFixed(2)} zł</strong>
                            <button onClick={() => onRemoveFromCart(item.id)}>Usuń</button>
                        </li>
                    );
                })}
            </ul>
            <strong>Łączny koszt: {cartTotal.toFixed(2)} zł</strong>
            <Link to="/order-summary"><button>Przejdź do podsumowania</button></Link>
            <Link to="/">Powrót do listy produktów</Link>
        </div>
    );
};

export default ShoppingCart;