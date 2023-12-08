import { useState } from "react";
import '../styles/ItemCounter.css';

export const ItemCounter = ({ onAdd, stock, initial }) => {
    const [ count, setCount] = useState(initial);

    const handleIncreaseCount = () => {
        if(stock > count) {  
        setCount(prev => prev + 1)
    }
}
const handleDecreaseCount = () => {
    if(count > 1) {  
    setCount(prev => prev - 1)
}
};

const handleAdd = () => {
    onAdd(count);
    setCount(initial);
};

    return (
        <div className="item-counter">
            <div onClick={handleDecreaseCount}>-</div>
            <mark>{count}</mark> 
            <div onClick={handleIncreaseCount}>+</div>
            <button onClick={handleAdd} >Agregar al carrito</button>
        </div>
    );
};