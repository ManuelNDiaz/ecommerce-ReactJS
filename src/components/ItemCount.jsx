import React, {useState} from 'react';

const ItemCount = () => {

    const [count, setCount] = useState (1);

    const resta = () => {
        setCount(count - 1);
        if (count < 2) {
            setCount(1);
          } 
    }

    const suma = () => {
        setCount(count + 1) 
    }

    const restart = () => {
        setCount(1);
      };

  return (
    <div className="add flex1">
    <button onClick={resta} className='btnCompras'>-</button>
    <label>{count}</label>
    <button onClick={suma} className='btnCompras'>+</button>
    <button onClick={restart} className='btnRes'>Restablecer</button>
</div>
  )
}

export default ItemCount