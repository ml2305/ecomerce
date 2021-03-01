import * as actions from '../consts/types';

const initialState = {
    cart: [],
    totalPrice: 0
};

const addProduct = (state, action) => {
    const newProduct = {
        id: action.product.id, name: action.product.name, price: action.product.price, description: action.product.description,
        brand: { id: action.product.brand.id, name: action.product.brand.name }, size: action.product.size, camera: action.product.camera,
        cpu: action.product.cpu, memory: action.product.memory, display: action.product.display, battery: action.product.battery, imageUrl: action.product.imageUrl, amount: 1
    };
    let newCart = [...state.cart];
    const addedPrice = newProduct.price * newProduct.amount;
    newCart.push(newProduct);
    return { ...state, cart: newCart, totalPrice: state.totalPrice + addedPrice };
}

const removeProduct = (state, action) => {
    let filteredCart = [...state.cart];
    const indexProduct = filteredCart.findIndex(product => product.id === action.id);
    const reducedPrice = filteredCart[indexProduct].price * filteredCart[indexProduct].amount;
    filteredCart = filteredCart.filter(product => product.id != action.id);
    return { ...state, cart: filteredCart, totalPrice: state.totalPrice - reducedPrice };
}

const increaseAmount = (state, action) => {
    let increasedCart = [...state.cart];
    const indexIncreased = increasedCart.findIndex(product => product.id === action.idToIncrease);
    increasedCart[indexIncreased].amount++;
    const increasedPrice = increasedCart[indexIncreased].price;
    return { ...state, cart: increasedCart, totalPrice: state.totalPrice + increasedPrice };
}

const decreaseAmount = (state, action) => {
    let decreasedCart = [...state.cart];
    const indexDecreased = decreasedCart.findIndex(product => product.id === action.idToDecrease);
    let decreasedPrice = 0;
    if (decreasedCart[indexDecreased].amount > 1) {
        decreasedCart[indexDecreased].amount--;
        decreasedPrice = decreasedCart[indexDecreased].price;
    }
    return { ...state, cart: decreasedCart, totalPrice: state.totalPrice - decreasedPrice };
}

const clearCart = () => {
    const newState = {
        cart: [],
        totalPrice: 0
    }
    return newState;
}

const reducer = (state = initialState, action) => {

    switch ((action.type)) {
        case actions.ADD_PRODUCT:
            return addProduct(state, action);

        case actions.REMOVE_PRODUCT:
            return removeProduct(state, action);

        case actions.INCREASE_AMOUNT:
            return increaseAmount(state, action);

        case actions.DECREASE_AMOUNT:
            return decreaseAmount(state, action);

        case actions.CLEAR_CART:
            return clearCart();

    }
    return state;
}

export default reducer;

