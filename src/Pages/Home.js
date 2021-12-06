import {  Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
        <div style={{padding: "20px", margin:"40px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div style={{color: "#008080", fontWeight: "bold", fontSize: "24px"}}>Welcome to the e-shop Page</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{color: "#20b2aa", fontWeight: "bold", fontSize: "20px"}}>Check the <Link to="/products" style={{color:"#007575"}}>Products</Link> Page to shop.</div>
        </div>
        </div>
    )
};

export default Home;