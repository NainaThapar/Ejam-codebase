
const reducer = (state = {total : parseInt(localStorage.getItem("itemCount"),10) || 0, 
productDetails: JSON.parse(localStorage.getItem("Products")) || [], shippingInfo: JSON.parse(localStorage.getItem("shippingInfo")) || {},
 cardInfo: {}, homePageMsg : "Welcome to the e-shop Page"}, action) => {
    switch(action.type) {
        case "add":
            return {
                ...state,
                total: updateCount(state, action.payload.total),
                productDetails: getProductDetails(state, action.payload)
            };
        case "remove":
            return {
                ...state,
                total: state.total - action.payload
            }
        case "setShippingInfo":
            return {
                ...state,
                shippingInfo: getShippingInfo(action.payload.shippingData)
            }
        case "setCardInfo":
            return {
                ...state,
                cardInfo: action.payload.cardData
            }
        default:
            return state
    }
}

function updateCount(state, count){
    let totalCount = state.total + count > 10 ? state.total : state.total + count;
    localStorage.setItem("itemCount", totalCount);
    return totalCount
}

function getProductDetails(state, data) {
    let productData = data.productDetails;
    let updatedData = [...state.productDetails];
    if(state.total + data.total <=10){
        let index = state.productDetails.findIndex((item) => item.id === productData.id);
        if(index < 0){
            updatedData = [...state.productDetails, {
               name: productData.name,
               imgUrl: productData.imgUrl,
               price: productData.price,
               sp: productData.sp,
               id: productData.id,
               qty: 1
           }];
       }
       else{
           updatedData[index].qty =  updatedData[index].qty + 1;
       }
    }
    localStorage.setItem("Products", JSON.stringify(updatedData));
    return updatedData;
}

function getShippingInfo(data) {
    localStorage.setItem("shippingInfo", JSON.stringify(data));
    return data;
}

export default reducer;