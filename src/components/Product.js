import '../styles/product.css';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import  * as actionCreators  from "../store/index";

const Product = (props) => {
    const dispatch = useDispatch();
    const { addProducts, removeProducts, setShippingInfo, setCardInfo } = bindActionCreators(actionCreators, dispatch);
    return(
        <div class="product-wrapper">
        <div><img src={props.imgUrl} alt="image" style={{ width: '150px', height: '150px'}}></img></div>
        <div class="product-details">
        <div class="product-title">{props.name}</div>  
          <div class="price">$<span style={{ fontSize: '20px'}}><b>{props.price}</b></span></div>
          {props.addBtn ? <div class="description">{props.desc}</div> : null}
          <div class="sp">Shipping Price: {props.sp}</div>
        </div>
        <div class="btn-container">
        {props.addBtn ? <button onClick={() => addProducts({
        total: parseInt(props.name.trim().substr(0,1)),
        productDetails: {
            name: props.name,
            imgUrl: props.imgUrl,
            price: `${props.price}`,
            sp: props.sp,
            id: props.id
        }
    })} style={{ color: '#fff', backgroundColor: 'green', borderRadius: '20px', padding:'5px 15px'}}>Add to Cart</button> : <div>Qty: {props.qty}</div> }
        </div>
        </div>
    )
}

export default Product;