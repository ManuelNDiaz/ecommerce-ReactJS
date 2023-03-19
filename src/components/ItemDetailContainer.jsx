import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail'
import { useParams } from 'react-router-dom';

const items = [
  {
    id: 1, img: "https://pcprojectstore.com.ar/wp-content/uploads/2022/06/monitor-gamer-samsung-odyssey-144hz-1-570x570.png",
    title: 'Monitor Samsung 144hz', price: 91.999, category: 'monitores'
  },
  {
    id: 2, img: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1530/innergigabyteimages/bg1.png",
    title: 'Monitor Gigabyte 34" curvo 144hz', price: 299.999, category: 'monitores', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
  {
    id: 3, img: "https://asset.msi.com/resize/image/global/product/product_0_20181015093729_5bc3ef59c2cfc.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    title: 'Monitor MSI Optix 75hz', price: 59.999, category: 'monitores', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
  {
    id: 4, img: "https://rampcrosario.com/wp-content/uploads/2019/03/pc-gamer.png",
    title: 'PC Gamer low cost', price: 109.999, category: 'pcs', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
  {
    id: 5, img: "https://ivi.cl/wp-content/uploads/2022/07/61051379-pc-gamer-falkor-plus-ryzen-7-5800x.png",
    title: 'PC Gamer Mid-Range', price: 149.999, category: 'pcs', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
  {
    id: 6, img: "https://bigpoint.com.ar/wp-content/uploads/2021/05/ofertas-bigpoint.png",
    title: 'PC Gamer High-end', price: 244.999, category: 'pcs', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
  {
    id: 7, img: "https://static.wikia.nocookie.net/xbox/images/2/26/Xbox-wireless-controller-carbon-black.png",
    title: 'Joystick Xbox Serie S', price: 29.999, category: 'accesorios', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
  {
    id: 8, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/877/534/products/duals-shock-51-05a734293bad53e0e616212699445870-640-0.png",
    title: 'Joystick PS5 Dual-Shock', price: 34.999, category: 'accesorios', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
  {
    id: 9, img: "https://www.venex.com.ar/products_images/1624913021_g840-kda-gallery-1.png",
    title: 'Mousepad Logitech G G840 KDA', price: 14.999, category: 'accesorios', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
  {
    id: 10, img: "https://gpsmundo.com/Image/0/750_750-981-000817-3_(1).png",
    title: 'Auriculares Logitech G Pro X', price: 47.999, category: 'perifericos', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
  {
    id: 11, img: "https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-5138210.png",
    title: 'Mouse Logitech G Pro X SuperLight', price: 35.999, category: 'perifericos', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
  {
    id: 12, img: "https://www.qloud.ar/SITES/IMG/gaming-point-06-2021/221_13-10-2022-01-10-24-g915-tkl-gallery-2-carbon-new.png",
    title: 'Teclado Logitech G915 TKL', price: 76.499, category: 'perifericos', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
  {
    id: 13, img: "https://static.gigabyte.com/StaticFile/Image/Global/90e81d153b7401ad1e4c99f2baeb4d64/Product/28195",
    title: 'Nvidia GeForce RTX 3050 TI', price: 290.249, category: 'graficas', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
  {
    id: 14, img: "https://www.qloud.ar/SITES/IMG/scp-hardstore-10-2020/181_03-03-2023-01-03-22-8-1.png",
    title: 'AMD Gigabyte RX 6700 XT', price: 184.799, category: 'graficas', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
  {
    id: 15, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/418/967/products/10001-25d194fcb8ffff62da16618095544344-640-0.png",
    title: 'Nvidia Gigabyte GTX 1050 TI', price: 105.499, category: 'graficas', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
  {
    id: 16, img: "https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8OTI1MjF8aW1hZ2UvcG5nfGg3OC9oYWMvMTEzODQ1NDE2NDI3ODIucG5nfGNmYTQ4MjY1MDhkMTI5MzkyMGZjZGIyYjkwODBiNmUzNDE5ZmI0ZDg4ZWU4OTY1MWY2YjczYzcxMGEzY2U5MjQ",
    title: 'Notebook Lenovo Legion 7', price: 760.599, category: 'notebooks', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
  {
    id: 17, img: "https://dlcdnwebimgs.asus.com/gain/33BE3FBC-C1AE-433A-A811-D9DFD39057C6",
    title: 'Notebook Rog Strix G15', price: 604.999, category: 'notebooks', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
  {
    id: 18, img: "https://tecnomilenio.com.ar/wp-content/uploads/2022/08/NotebookGigabyteAorus515FHDi7-3070P-16G-512WH.jpg",
    title: 'Notebook Gigabyte Aorus 5', price: 999.999, category: 'notebooks', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
  {
    id: 19, img: "https://logg.api.cygnus.market/static/logg/Global/Procesador%20AMD%20Ryzen%209%205950X%204.9GHz%2064MB%20Zen3%20AM4/2db5eb4de34d4f179843049ebf53262f.webp",
    title: 'Procesador Ryzen 9 5050x', price: 284.499, category: 'hardware', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
  {
    id: 20, img: "http://intech.com.gt/sU/files/articulos/1675106129.png",
    title: 'Procesador Intel I9 11900k', price: 220.999, category: 'hardware', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
  {
    id: 21, img: "https://logg.api.cygnus.market/static/logg/Global/Procesador%20AMD%20Ryzen%207%205700G%204.6%20GHz%2016MB%20Zen3%20Gr%C3%A1ficos%20Radeon%208%20AM4%20c/%20Cooler/d0b27542bd33480181c5d6581d44f028.webp",
    title: 'Procesador Ryzen 7 5700g', price: 100.099, category: 'hardware', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex cum totam fugiat sequi alias laudantium omnis quos maxime. Eaque laboriosam quidem dolorem voluptatem cumque nisi? Ex alias aperiam nostrum.'
  },
]

const ItemDetailContainer = () => {

  const [data, setData] = useState({});

  const { detalleid } = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(items);
      }, 500);
    });

    getData.then(res => setData(res.find(itms => itms.id === parseInt(detalleid))))


  }, [])

  return (

    <>

      <ItemDetail data={data} />

    </>

  )
}

export default ItemDetailContainer