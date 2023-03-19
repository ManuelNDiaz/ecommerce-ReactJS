import React from 'react'
import { Container } from 'react-bootstrap'
import Item from './Item'


const ItemList = ({data = []}) => {
  return (     

  <Container>
    <div className="containerCardItems">
    {
    data.map(objetos =>  <Item key={objetos.id} info={objetos} />)
}
</div>
</Container>
  )
}

export default ItemList