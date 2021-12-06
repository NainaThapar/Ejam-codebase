import React, { useState,useEffect } from 'react';
import Product from "./Product";


const Products = () => {
    const[items, setItems] = useState([]);
    
    useEffect(() => {
        fetch('https://test.ejam.com/api/recruitment/frontendtask1/products')
          .then(response => response.json())
          .then(json => setItems(json.products))
      }, [])
    return(
        <div>
            {items.length? items.map(item => {
          return <Product name = {item.name} imgUrl={item.imageUrl} desc={item.description} price={item.price} sp={item.shippingPrice} id={item.id} addBtn={true}/>
        }): null }
        </div>
    )
}

export default Products;