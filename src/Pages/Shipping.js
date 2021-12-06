import TextField from "@material-ui/core/TextField";
import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import  * as actionCreators  from "../store/index";

const Shipping = () => {
    const dispatch = useDispatch();
    const { addProducts, removeProducts, setShippingInfo, setCardInfo } = bindActionCreators(actionCreators, dispatch);
    const sd = JSON.parse(localStorage.getItem("shippingInfo")) || {};

//shipping details state
  const [fnValue, setFnValue] = useState(sd.fnValue || "");
  const onFnChange = (e) => setFnValue(e.target.value);
  const [lnValue, setLnValue] = useState(sd.lnValue || "");
  const onLnChange = (e) => setLnValue(e.target.value);
  const [addressValue, setAddressValue] = useState(sd.addressValue || "");
  const onAddressChange = (e) => setAddressValue(e.target.value);
  const [pnValue, setPnValue] = useState(sd.pnValue || "");
  const onPnChange = (e) => setPnValue(e.target.value);    
  const [cityValue, setCityValue] = useState(sd.cityValue || "");
  const onCityChange = (e) => setCityValue(e.target.value);
  const [countryValue, setCountryValue] = useState(sd.countryValue || "");
  const onCountryChange = (e) => setCountryValue(e.target.value);

//card details state
  const [cnValue, setCnValue] = useState("");
  const onCnChange = (e) => setCnValue(e.target.value);
  const [monthValue, setMonthValue] = useState("");
  const onMonthChange = (e) => setMonthValue(e.target.value);
  const [yearValue, setYearValue] = useState("");
  const onYearChange = (e) => setYearValue(e.target.value);
  const [nameValue, setNameValue] = useState("");
  const onNameChange = (e) => setNameValue(e.target.value);
  const [scValue, setScValue] = useState("");
  const onScChange = (e) => setScValue(e.target.value);

  const error = <div style={{color: "red"}}>Please enter all the details</div>
  const [isError, setIsError] = useState(false);
  const [cardError, setCardError] = useState(false);
  const [data, setData] = useState({});
  const userData = useSelector((state) => state.user);
  useEffect(() => {
    setData(userData);
  }, [userData])
      
  const onConfirmOrder = (shippingData, cardData) => {
    if(shippingData.fnValue === "" || shippingData.lnValue === ""  || shippingData.pnValue  === "" || shippingData.addressValue  === "" 
    || shippingData.cityValue  === "" || shippingData.countryValue === "" ){
        setIsError(true);
    }
    else{
        setIsError(false);
    }
    if(cardData.cnValue === "" || cardData["expiry"].monthValue === "" || cardData["expiry"].yearValue === "" || cardData.nameValue === "" || cardData.scValue === ""){
        setCardError(true);
    }
    else{
        setCardError(false);
    }

    if(isError === false && cardError === false){
        setShippingInfo({shippingData: shippingData});
        setCardInfo({cardData: cardData});
        let dataToSend = {
            "productDetails": userData["productDetails"],
            "totalCount": userData["total"],
            shippingData,
            cardData
        }
        saveOrderDetails(dataToSend);
        
    }
}


const saveOrderDetails = (userData) => {
    fetch('https://test.ejam.com/api/recruitment/frontendtask1/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userData: userData, 
      }),
    })
      .then((res) => res.json())
     .then((result) => {
        setCardInfo({cardData: {}});
        addProducts({total: 0,
        productDetails: {}});
        localStorage.removeItem("itemCount")
        localStorage.removeItem("Products");
        window.location.href = "/success";
     })
      .catch((err) => console.log('error'))
}
  return (
    <div style={{ margin: "15px 85px" }}>
      <div>
        <div style={{fontWeight: "500"}}> Shipping Information Form: </div>
        {isError ? error : null}
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <h3>Shipping Address</h3>
          <TextField
            onChange={onFnChange}
            value={fnValue}
            label={"First Name"}
          />
          <span style={{ marginRight: "20px" }}></span>
          <TextField
            onChange={onLnChange}
            value={lnValue}
            label={"Last Name"}
          />
          <div></div>
          <TextField
            onChange={onAddressChange}
            value={addressValue}
            label={"Address"}
          />
          <span style={{ marginRight: "20px" }}></span>
          <TextField
            onChange={onPnChange}
            value={pnValue}
            label={"Phone number"}
          />
          <div></div>
          <TextField onChange={onCityChange} value={cityValue} label={"City"} />
          <span style={{ marginRight: "20px" }}></span>
          <TextField
            onChange={onCountryChange}
            value={countryValue}
            label={"Country"}
          />
          <div style={{ marginBottom: "30px" }}></div>
        </div>
      </div>
      <hr />
      <h3 style={{color: "#32cd32"}}>Enter Card details</h3>
      {cardError ? error : null}
      <div style={{border: "1px solid #ccc", paddingLeft: "40px", paddingBottom: "30px", width: "400px"}}>
        <div style={{ fontWeight: "bold", marginTop: "10px" }}>Card number</div>
        <div>
          <TextField onChange={onCnChange} value={cnValue} />
        </div>
        <div style={{ fontWeight: "bold", marginTop: "10px" }}>Expiry date</div>
        <div style={{ display: "flex" }}>
          <div>Month</div>
          <div style={{ marginLeft: "20px" }}>Year</div>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <TextField
              onChange={onMonthChange}
              value={monthValue}
              style={{ width: "40px" }}
            />
          </div>
          /
          <div>
            <TextField
              onChange={onYearChange}
              value={yearValue}
              style={{ width: "40px" }}
            />
          </div>
        </div>
        <div style={{ fontWeight: "bold", marginTop: "10px" }}>Name on Card</div>
        <div>
            <TextField
              onChange={onNameChange}
              value={nameValue}
            />
          </div>
          <div style={{ fontWeight: "bold", marginTop: "10px" }}>Card security Code</div>
        <div>
            <TextField
              onChange={onScChange}
              value={scValue}
              style={{ width: "70px" }}
            />
          </div>
          <Button style={{backgroundColor: "#009e00", marginTop: "10px", color: "#fff"}} 
          onClick={() => onConfirmOrder({fnValue, lnValue, addressValue, pnValue, cityValue, countryValue}, 
          {cnValue, expiry: {monthValue, yearValue}, nameValue, scValue})}>CONFIRM ORDER</Button>
      </div>
    </div>
  );
};


export default Shipping;
