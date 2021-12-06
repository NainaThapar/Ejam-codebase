export const addProducts = (data) => {
    return (dispatch) => {
        dispatch({
            type: "add",
            payload: data
        })
    }
}

export const removeProducts = (count) => {
    return (dispatch) => {
        dispatch({
            type: "remove",
            payload: count
        })
    }
}

export const setShippingInfo = (shippingInfo) => {
    return (dispatch) => {
        dispatch({
            type: "setShippingInfo",
            payload: shippingInfo
        })
    }
}

export const setCardInfo = (cardInfo) => {
    return (dispatch) => {
        dispatch({
            type: "setCardInfo",
            payload: cardInfo
        })
    }
}
