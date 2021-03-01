import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillTrashFill } from "react-icons/bs";
import { FaShoppingCart } from 'react-icons/fa';
import useProducts from './Hooks/useProducts';
import { Card, Button, Spinner } from 'react-bootstrap';
import * as actions from './consts/types';


const Product = (props) => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const [product] = useProducts('/products/' + props.match.params.id);
    const display = product && cart.findIndex(val => val.id === product.id);
    
    return (
        <div>
            {product?
            <div className="container bcontent">
                <Card >
                    <div className="row no-gutters">
                        <div className="col-sm-5">
                            <Card.Img src={product.imageUrl} alt="product image" />
                        </div>
                        <div className="col-sm-7">
                            <Card.Body>
                                <Card.Title><strong>{product.name}</strong></Card.Title>
                                <h3>${product.price}</h3>
                                <Card.Text><strong>Description: </strong>{product.description}</Card.Text>
                                <Card.Text><strong>Brand: </strong>{product.brand.name}</Card.Text>
                                <Card.Text><strong>Size: </strong>{product.size}</Card.Text>
                                <Card.Text><strong>Camera: </strong>{product.camera}</Card.Text>
                                <Card.Text><strong>CPU: </strong>{product.cpu}</Card.Text>
                                <Card.Text><strong>Memory: </strong>{product.memory}</Card.Text>
                                <Card.Text><strong>Display: </strong>{product.display}</Card.Text>
                                <Card.Text><strong>Battery: </strong>{product.battery}</Card.Text>
                                {display === -1 ? 
                                <Button variant="success" onClick={() => dispatch({ type: actions.ADD_PRODUCT, product })}><FaShoppingCart/>add to cart</Button> :
                                <>
                                    <Button variant="danger" onClick={() => dispatch({type: actions.REMOVE_PRODUCT, id: product.id})}><BsFillTrashFill/>Remove from cart</Button>
                                    <div className="btn-group align-items-center ml-3">
                                        <div className="px-3">{cart[display].amount}</div>
                                        <div className="btn-group-vertical">
                                            <Button onClick={() => dispatch({type: actions.INCREASE_AMOUNT, idToIncrease: product.id})} variant="btn p-0">+</Button>
                                            <Button onClick={() => dispatch({type: actions.DECREASE_AMOUNT, idToDecrease: product.id})} variant="btn p-0" disabled={cart[display].amount === 1}>-</Button>
                                        </div>
                                    </div>
                                </>}
                            </Card.Body>
                        </div>
                    </div>
                </Card>
            </div>
            : <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>}
        </div>
    );

}


export default Product;