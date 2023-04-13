import React, { useState, useContext, useEffect } from 'react'
export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]' )

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addProduct = (item, newQuantity) => {
    const { quantity = 0 } = cart.find (prod => prod.id === item.id) || {};
    const newCart = cart.filter ( prod => prod.id !== item.id);
    setCart([ ...newCart, { ...item, quantity : quantity + newQuantity } ])
  }

  console.log('Carrito: ', cart)

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
  }

  const totalProducts = () => cart.reduce ((acumulador, productoActual) => acumulador + productoActual.quantity, 0)

  const clearCart = () => setCart([]);
  
  const isInCart = (id) => cart.find (product => product.id === id) ? true : false;

  const removeProduct = (id) => setCart (cart.filter(product => product.id !== id ));


  return (
    <CartContext.Provider value={{
      clearCart, isInCart, removeProduct, addProduct, totalPrice, totalProducts, cart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider