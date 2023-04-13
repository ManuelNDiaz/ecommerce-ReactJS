import React from 'react'
import { useCartContext } from './CartContext'

const ItemCart = ({ product }) => {

  const { removeProduct } = useCartContext();
  
    return (
    <div className="cartCont flex">
      <div className="left">
        <div className='infoimgcontent'>
          <img src={product.img} className='cartImage' alt="{product.title}" />
        </div>
      </div>
      <div className="right">
            <h4 className='prodTitle'>{product.title}</h4>
            <h3 className='prodCant'>Cantidad : {product.quantity}</h3>
            <h3 className='prodCant'>Precio por únidad : {product.price}</h3>
            <h3 className='prodCant'>Subtotal : ${product.quantity * product.price}</h3>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>  
    </div>
  )
}

export default ItemCart