import React from 'react'
import ItemCount from './ItemCount'

const itemDetail = ({ data }) => {
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
                <h5>Cantidad</h5>
                <ItemCount/>

                <button className='btnaddcart'>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default itemDetail