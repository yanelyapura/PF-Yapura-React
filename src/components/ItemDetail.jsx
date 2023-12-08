import { useContext } from "react";
import { ItemCounter } from "./ItemCounter";
import { CartContext } from '../contexts/CartContext';

export const ItemDetail = ({item}) => {
    const { addToCart } = useContext(CartContext);

    const add = (quantity) => {
        addToCart(item, quantity);
    };

    return ( 
        <>
            <h1>{item.title}</h1>
            <img src={item.pictureUrl}  width={400} />
            <h2>Stock: {item.stock}</h2>
            <ItemCounter onAdd={add} stock={ item.stock } initial={1} />
        </>
    );
};
