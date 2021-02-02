import React, { useState } from 'react';
<<<<<<< HEAD
import { useSelector, useDispatch} from 'react-redux';
import Modal from './UI/Modal';
import './Cart.css';
import { BsFillTrashFill } from "react-icons/bs";
import useHttp from './Hooks/useHttp';
import { Card, Col, Row, Button } from 'react-bootstrap';

const Cart = () => {

    const [order, fetchOrder] = useHttp();
    const cart = useSelector(state => state.cart);
    const totalPrice = useSelector(state => state.totalPrice);
    const dispatch = useDispatch();
    const [ordering, setOrdering] = useState(false);
    

    const orderCart = () => {
        let order = cart.map(product => {
=======
import axios from 'axios';
import { connect } from 'react-redux';
import Modal from './UI/Modal';
import './Cart.css';
import { BsFillTrashFill } from "react-icons/bs";

const Cart = (props) => {

    const [ordering, setOrdering] = useState(false);
    const [text, setText] = useState();

    const orderCart = () => {
        let order = props.cart.map(product => {
>>>>>>> 8fae074a18eb002d814af1da65e1d401d4c4f0c4
            return {
                id: product.id,
                amount: product.amount
            }
        });
<<<<<<< HEAD
        setOrdering(true);
        fetchOrder('/order', 'post', {products: order});
        dispatch({type: 'clearCart'});

=======
        setOrdering(true)
        axios.post('http://localhost:8080/order', {products: order})
        .then(response => {
            const data = response.data;
            setText('Successfully placed the order id:' + data.id + ' total price: ' + data.totalPrice);
            props.onClearCart();
            
        })
        .catch(err => {
            setText('An error has occured, please retry ordering!');
            
        });
>>>>>>> 8fae074a18eb002d814af1da65e1d401d4c4f0c4
    }

    const onModal = () => {
        setOrdering(false);
    }
    
    return (
        <div>
<<<<<<< HEAD
            <Modal show={ordering && order} onOk={onModal}>
                {order}
            </Modal>
        <Card>
            <Card.Header>Shipping Cart</Card.Header>
            <Card.Body>
                {cart.map(product => {
                    return (
                        <Row>
                            <Col sm={2}>
                                <img src={product.imageUrl} style={{height: '150px', width: '150px', margin: '12px'}} />
                            </Col>
                            <Col sm={6}>
                                <h5>{product.name}</h5>
                                <p>{product.description}</p>
                            </Col>
                            <Col sm={1}>
                                <strong>{product.price}$</strong>
                            </Col>
                            <Col sm={2}>
                                <div className="btn-group align-items-center" >
                                    <div className="px-3">{product.amount}</div>
                                    <div className="btn-group-vertical">
                                        <Button onClick={() => dispatch({type: 'increaseAmount', idToIncrease: product.id})} variant="btn p-0">+</Button>
                                        <Button onClick={() => dispatch({type: 'decreaseAmount', idToDecrease: product.id})} variant="btn p-0">-</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={1}>
                                <Button onClick={() => dispatch({type: 'removeProduct', id: product.id})} className="btn btn-danger"><BsFillTrashFill/>Remove</Button>
                            </Col>
                        </Row>
                    );
                })}
            </Card.Body>
            <Card.Footer className="text-muted">
                Total Price: <strong>{totalPrice.toFixed(2)}</strong>
            </Card.Footer>
        </Card>
        <Button className="OrderButton"
            disabled={cart.length === 0}
            onClick={() => orderCart()}>Order</Button>
=======
                <Modal show={ordering && text} onOk={onModal}>
                    {text}
                </Modal>
        <div className="card">
            <h5 className="card-header">Shipping Cart</h5>
            <div className="card-body">
                {props.cart.map(crt => {
                    return (
                        <div className="row">
                            <div className="col-sm-2">
                                <img src={crt.imageUrl} style={{height: '150px', width: '150px', margin: '12px'}} />
                            </div>
                            <div className="col-sm-6">
                                <h5>{crt.name}</h5>
                                <p>{crt.description}</p>
                            </div>
                            <div className="col-sm-1">
                                <strong>{crt.price}$</strong>
                            </div>
                            <div className="col-sm-2">
                                <div className="btn-group align-items-center" >
                                    <div className="px-3">{crt.amount}</div>
                                    <div className="btn-group-vertical">
                                        <button onClick={() => props.onIncreaseAmount(crt.id)} className="btn p-0">+</button>
                                        <button onClick={() => props.onDecreaseAmount(crt.id)} className="btn p-0">-</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-1">
                                <button onClick={() => props.onRemoveFromCart(crt.id)} className="btn btn-danger"><BsFillTrashFill/>Remove</button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div class="card-footer text-muted">
                Total Price: <strong>{props.totalPrice.toFixed(2)}</strong>
            </div>
        </div>
        <button className="OrderButton"
            disabled={props.cart.length === 0}
            onClick={() => orderCart()}>Order</button>
>>>>>>> 8fae074a18eb002d814af1da65e1d401d4c4f0c4
        </div>
    );
}

<<<<<<< HEAD

export default Cart;
=======
const mapStateToProps = state => {
    return {
        cart: state.cart,
        totalPrice: state.totalPrice 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveFromCart: (id) => {
            return dispatch({type: 'removeProduct', id: id})
        },
        onIncreaseAmount: (id) => {
            return dispatch({type: 'increaseAmount', idToIncrease: id})
        },
        onDecreaseAmount: (id) => {
            return dispatch({type: 'decreaseAmount', idToDecrease: id})
        },
        onClearCart: () => {
            return dispatch({type: 'clearCart'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
>>>>>>> 8fae074a18eb002d814af1da65e1d401d4c4f0c4
