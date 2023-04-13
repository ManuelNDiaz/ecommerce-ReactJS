import React, { useState } from 'react'
import { useCartContext } from './CartContext'
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';

const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    const order = {
      buyer: {
        name: 'Manuel',
        email: 'proof@gmail.com',
        teléfono: '123123123',
        dirección: 'keasd'
      },
      items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
      total: totalPrice()
    }

    const handleClick = () => {

      const db = getFirestore();
      const ordersCollection = collection(db, 'orders');
      addDoc(ordersCollection, order)
      .then(({ id }) => console.log(id))

      swal({
        title: "¡Compra realizada!",
        text: "Nos estaremos comunicando con ústed a través de su email ",
        icon: "success",
        button: "Continuar",
      })
    }

    if (cart.length === 0)
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Comprar productos</Link>
            </>
        )



  return (
    <>
    <Container>
      {
        cart.map ( product => <ItemCart key={product.id} product={product} />)
      }
      <h4 className='cartPrice' >
        Total : ${totalPrice()}
      </h4>
      <button onClick={handleClick}>Comprar</button>
      </Container>
    </>
  )
}

export default Cart