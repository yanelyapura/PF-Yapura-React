import cart from '../assets/cart.png'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const CartWidget = () => {
    const { cartItems } = useContext(CartContext); 
    const total = cartItems.reduce((acumulador, valorActual) => acumulador + valorActual.quantity, 0);
    return (
        <Link to="/cart">
            <img src={cart} alt="carrito" width={30} />
            <span>{total}</span>
        </Link>
    );
};
