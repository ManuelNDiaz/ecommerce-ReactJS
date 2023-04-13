import React from 'react'
import { Container } from 'react-bootstrap'
import Item from './Item'


const ItemList = ({data = []}) => {
  return (     


    <div className="containerCardItems">
    {
    data.map(objetos =>  <Item key={objetos.id} info={objetos} />)
}
</div>

  )
}

export default ItemList