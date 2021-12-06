import Product from "../components/Product";
import {  Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Cart = () => {
    const selectedProducts = JSON.parse(localStorage.getItem("Products")) || [];
    return (
        <>
         {selectedProducts.length ? <Link to="shipping">
         <Button style={{backgroundColor: "#009e00", marginTop: "10px", color: "#fff", float: "right", marginRight: "10px"}}>CHECKOUT</Button>
         </Link> : <div style={{display: "flex", justifyContent:"center", alignItems:"center", marginTop: "80px", fontWeight: "bold"}}>You have not selected any Product yet.</div> }
        {selectedProducts.map(item => {
            return <Product name = {item.name} imgUrl={item.imgUrl} price={item.price} sp={item.sp} qty={item.qty} addBtn={false}/>
          })}
        </>
       
    )
};

export default Cart;