import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail'
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc, query } from 'firebase/firestore';



const ItemDetailContainer = () => {

  const [data, setData] = useState({});

  const { detalleid } = useParams();

  useEffect(() => {
    
    const querydb = getFirestore ();
    const queryDoc = doc (querydb, 'productos', detalleid)
    getDoc(queryDoc)
    .then( res => setData({id : res.id, ...res.data()})) 

  }, [])

  return (

    <>

      <ItemDetail data={data} />

    </>

  )
}

export default ItemDetailContainer