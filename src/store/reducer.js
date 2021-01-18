
const initialState = {
    cart : [],
    totalPrice: 0
};

const reducer = (state = initialState, action) => {

    switch ((action.type)) {
        case 'addProduct':
            let newProduct = {id:action.id, name:action.name, price:action.price, description:action.description,
                                brand:{id:action.brandId, name:action.brandName}, size:action.size, camera:action.camera, 
                                cpu:action.cpu, memory:action.memory, display:action.display, battery:action.battery, imageUrl:action.imageUrl, amount:1};
            let newCart = [...state.cart];
            let addedPrice = newProduct.price * newProduct.amount; 
            newCart.push(newProduct);
            return {...state, cart: newCart, totalPrice: state.totalPrice + addedPrice};

        case 'removeProduct':
            let filteredCart = [...state.cart];
            let indexProduct = filteredCart.findIndex(product => product.id === action.id);
            let reducedPrice = filteredCart[indexProduct].price * filteredCart[indexProduct].amount;
            filteredCart = filteredCart.filter(product => product.id != action.id);
            return {...state, cart: filteredCart, totalPrice: state.totalPrice - reducedPrice};
        
        case 'increaseAmount': 
            let increasedCart = [...state.cart];
            let indexIncreased = increasedCart.findIndex(product => product.id === action.idToIncrease);
            increasedCart[indexIncreased].amount ++;
            let increasedPrice = increasedCart[indexIncreased].price;
            return {...state, cart: increasedCart, totalPrice: state.totalPrice + increasedPrice};
        case 'decreaseAmount':
            let decreasedCart = [...state.cart];
            let indexDecreased = decreasedCart.findIndex(product => product.id === action.idToDecrease);
            let decreasedPrice = 0;
            if(decreasedCart[indexDecreased].amount > 1) {
                decreasedCart[indexDecreased].amount --;
                decreasedPrice = decreasedCart[indexDecreased].price;
            }
            return {...state, cart: decreasedCart, totalPrice: state.totalPrice - decreasedPrice};
        case 'clearCart': 
            const newState = {
                cart: [],
                totalPrice: 0
            }
            return newState;
    }
    return state;
}

export default reducer;

