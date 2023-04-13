import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'
import { useCartContext } from './CartContext';

const itemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext ();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity)
    }

    return (
        <div className="contaainer flex">
            <div className="left">
                <div className='infoimgcontent'>
                    <img src={data.img} className='main_image' alt="" />
                </div>
            </div>
            <div className="right">
                <h3>{data.title}</h3>
                <p className='itmdesc'>{data.description}</p>
                <h4> <small>ARS</small> ${data.price}</h4>
                <p>{data.info}</p>              
                {
                    goToCart
                    ? <Link to='/cart'><button className="btnaddcart">Finalizar compra</button></Link>
                    : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                }
                
            </div>
        </div>
    )
}

export default itemDetail