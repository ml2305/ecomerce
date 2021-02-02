<<<<<<< HEAD
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillTrashFill } from "react-icons/bs";
import { FaShoppingCart } from 'react-icons/fa';
import useHttp from './Hooks/useHttp';
import { Card, Button } from 'react-bootstrap';
=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { BsFillTrashFill } from "react-icons/bs";
import { FaShoppingCart } from 'react-icons/fa';
>>>>>>> 8fae074a18eb002d814af1da65e1d401d4c4f0c4


const Product = (props) => {

<<<<<<< HEAD
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const [product, fetchProduct] = useHttp('/products/' + props.match.params.id);
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
                                <Button variant="success" onClick={() => dispatch({ type: 'addProduct', id: product.id, name: product.name, price: product.price, description: product.description, brandId: product.brand.id, brandName: product.brand.name, size: product.size, camera: product.camera, cpu: product.cpu, memory: product.memory, display: product.display, battery: product.battery, imageUrl: product.imageUrl })}><FaShoppingCart/>add to cart</Button> :
                                <>
                                    <Button variant="danger" onClick={() => dispatch({type: 'removeProduct', id: product.id})}><BsFillTrashFill/>Remove from cart</Button>
                                    <div className="btn-group align-items-center ml-3">
                                        <div className="px-3">{cart[display].amount}</div>
                                        <div className="btn-group-vertical">
                                            <Button onClick={() => dispatch({type: 'increaseAmount', idToIncrease: product.id})} variant="btn p-0">+</Button>
                                            <Button onClick={() => dispatch({type: 'decreaseAmount', idToDecrease: product.id})} variant="btn p-0">-</Button>
                                        </div>
                                    </div>
                                </>}
                            </Card.Body>
                        </div>
                    </div>
                </Card>
=======
    const [product, setProduct] = useState();
    const display = product && props.crt.findIndex(val => val.id === product.id)

    useEffect(() => {
        axios.get('http://localhost:8080/products/' + props.match.params.id)
            .then(response => {
                setProduct(response.data);
            })
    }, []);

    return (
        <div>
            {product?
            <div class="container bcontent">
                <div class="card" style={{ width: '100%' }}>
                    <div class="row no-gutters">
                        <div class="col-sm-5">
                            <img class="card-img" src={product.imageUrl} alt="product image" />
                        </div>
                        <div class="col-sm-7">
                            <div class="card-body">
                                <h1 class="card-title">{product.name}</h1>
                                <h2>${product.price}</h2>
                                <p class="card-text"><strong>Description: </strong>{product.description}</p>
                                <p class="card-text"><strong>Brand: </strong>{product.brand.name}</p>
                                <p class="card-text"><strong>Size: </strong>{product.size}</p>
                                <p class="card-text"><strong>Camera: </strong>{product.camera}</p>
                                <p class="card-text"><strong>CPU: </strong>{product.cpu}</p>
                                <p class="card-text"><strong>Memory: </strong>{product.memory}</p>
                                <p class="card-text"><strong>Display: </strong>{product.display}</p>
                                <p class="card-text"><strong>Battery: </strong>{product.battery}</p>
                                {display === -1 ? 
                                <button onClick={() => props.onAddToCart(product.id, product.name, product.price, product.description, product.brand.id, product.brand.name, product.size, product.camera, product.cpu, product.memory, product.display, product.battery, product.imageUrl)} className="btn btn-success"><FaShoppingCart/>add to cart</button> :
                                <div>
                                    <button onClick={() => props.onRemoveFromCart(product.id)} className="btn btn-danger"><BsFillTrashFill/>Remove from cart</button>
                                    <div className="btn-group align-items-center ml-3">
                                        <div className="px-3">{props.crt[display].amount}</div>
                                        <div className="btn-group-vertical">
                                            <button onClick={() => props.onIncreaseAmount(product.id)} className="btn p-0">+</button>
                                            <button onClick={() => props.onDecreaseAmount(product.id)} className="btn p-0">-</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
>>>>>>> 8fae074a18eb002d814af1da65e1d401d4c4f0c4
            </div>
            : null}
        </div>
    );

}

<<<<<<< HEAD

export default Product;
=======
const mapStateToProps = state => {
    return {
        crt: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (id, name, price, description, brandId, brandName, size, camera, cpu, memory, display, battery, imageUrl) => {
            return dispatch({ type: 'addProduct', id: id, name: name, price: price, description: description, brandId: brandId, brandName: brandName, size: size, camera: camera, cpu: cpu, memory: memory, display: display, battery: battery, imageUrl: imageUrl })
            },
         onRemoveFromCart: (id) => {
             return dispatch({type: 'removeProduct', id: id})
         },
         onIncreaseAmount: (id) => {
            return dispatch({type: 'increaseAmount', idToIncrease: id})
        },
        onDecreaseAmount: (id) => {
            return dispatch({type: 'decreaseAmount', idToDecrease: id})
        }   
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Product);
>>>>>>> 8fae074a18eb002d814af1da65e1d401d4c4f0c4
