import ItemList from './ItemList';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';






const ItemListContainer = ({ greeting }) => {

  const [data, setData] = useState([]);

  const { categoryid } = useParams();

  useEffect(() => {

    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'productos');

    if (categoryid){
      const queryFilter = query(queryCollection, where('category', '==', categoryid))
      getDocs (queryFilter)
      .then(res => setData (res.docs.map(product => ({id : product.id, ...product.data()}))))
    } else {
      getDocs (queryCollection)
      .then(res => setData (res.docs.map(product => ({id : product.id, ...product.data()}))))
    }

  }, [categoryid])


  return (
    <div>
      <h2 className='titulo'>{greeting}</h2>

      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;


