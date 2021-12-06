import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import {  Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Header = () => {
    const [count, setCount] = useState(localStorage.getItem("itemCount") || 0);
    const total = useSelector((state) => state.user.total);
    useEffect(() => {
        setCount(total);
      }, [total])
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <nav style={{display: "flex", alignItems: "center"}}>

        <Link to="/" style={{color: "#fff", textDecoration:"none", marginRight: "10px", cursor: "pointer"}}>Home</Link>
        <span><Link to="/products" style={{color: "#fff", textDecoration:"none", marginRight: "10px", cursor: "pointer"}}>Products</Link></span>

        
      </nav>
            <Link to="cart"><div style={{margin: '27px 65px'}}>
            <Badge color="secondary" badgeContent={count}>
          <ShoppingCartIcon />{" "}
        </Badge>
            </div></Link>
        </div>
        
    )
};


export default Header;