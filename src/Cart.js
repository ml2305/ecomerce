import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Modal from './UI/Modal';
import './Cart.css';
import { BsFillTrashFill } from "react-icons/bs";
import usePostOrder from './Hooks/usePostOrder';
import { Card, Col, Row, Button, Spinner } from 'react-bootstrap';

const Cart = () => {

    const [order, fetchOrder] = usePostOrder();
    const cart = useSelector(state => state.cart);
    const totalPrice = useSelector(state => state.totalPrice);
    const dispatch = useDispatch();
    const [ordering, setOrdering] = useState(false);
    

    const orderCart = () => {
        let order = cart.map(product => ({
                id: product.id,
                amount: product.amount
            })
        );
        setOrdering(true);
        fetchOrder('/order', {products: order});
        dispatch({type: 'clearCart'});

    }

    const onModal = () => {
        setOrdering(false);
    }
    
    return (
        <div>
            <Modal show={ordering && typeof order.data !== 'undefined'} onOk={onModal}>
                {order.data}
            </Modal>
        <Card>
            <Card.Header>Shipping Cart</Card.Header>
            <Card.Body>
                {cart.map(product => (
                        <Row key={`item_${product.id}`}>
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
                                        <Button onClick={() => dispatch({type: 'decreaseAmount', idToDecrease: product.id})} variant="btn p-0" disabled={product.amount === 1}>-</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={1}>
                                <Button onClick={() => dispatch({type: 'removeProduct', id: product.id})} className="btn btn-danger"><BsFillTrashFill/>Remove</Button>
                            </Col>
                        </Row>
                    )
                )}
            </Card.Body>
            <Card.Footer className="text-muted">
                Total Price: <strong>{totalPrice.toFixed(2)}</strong>
            </Card.Footer>
        </Card>
        {!order.loading?
        <Button className="OrderButton"
        disabled={cart.length === 0}
        onClick={orderCart}>Order</Button>:
        <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
                </Button>}      
        </div>
    );
}


export default Cart;