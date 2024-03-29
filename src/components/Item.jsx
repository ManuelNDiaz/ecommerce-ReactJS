import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../components/CartContext'



const Item = ({ info }) => {


  return (

    <section className="slider">
    <div className="card">
        <div className="card-content">
            <img src={info.img} alt={info.title} className="card-img"/>
            <h1 className="card-title">{info.title}</h1>
            <div className="card-body">
                <p className="card-price">ARS ${info.price}</p>
            </div>
            <div className="card-footer">
            <Link to={`/item/${info.id}`}><button className="btn btn-primary">Comprar ahora</button></Link>
                <Link to={`/item/${info.id}`}><button className="btn btn-border">Más info</button></Link>
            </div>
        </div>
    </div>
    </section>

  )
}

export default Item