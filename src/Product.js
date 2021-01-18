import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { BsFillTrashFill } from "react-icons/bs";
import { FaShoppingCart } from 'react-icons/fa';


const Product = (props) => {

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
            </div>
            : null}
        </div>
    );

}

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