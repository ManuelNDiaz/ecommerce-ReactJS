import React, {useState} from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {

  
  const [count, setCount] = useState(initial);

  const resta = () => {
    setCount(count - 1)
  }
  
  const suma = () => {
    setCount (count + 1)
  }
  
  
  const restart = () => {
    setCount(1);
  };

  return (
    <div className="add flex1">
    <h5 className='cantidad'>Cantidad</h5>  
    <button disabled={count <= 1} onClick={resta} className='btnCompras'>-</button>
    <label>{count}</label>
    <button disabled={count >= stock} onClick={suma} className='btnCompras'>+</button>
    <button onClick={restart} className='btnRes'>Restablecer</button>
    <div className="right">
    <button disabled = {stock <= 0 } onClick={() => onAdd(count)} className='btnaddcart'>Agregar al carrito</button>
    </div>
</div>
  )
}

export default ItemCount