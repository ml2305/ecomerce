import { useState, useEffect } from 'react';
import axios from 'axios';

const useProducts = (url) => {

    const [products, setProducts] = useState();

    const fetchProducts = (path) => {
        axios.get(process.env.REACT_APP_HTTP + path)
            .then(res => {
                setProducts(res.data);
            })
            .catch(() => {
                alert('An error has occured, please reload');
            });
    }

    useEffect(() => {
        if (url) {
            fetchProducts(url);
        }
    }, []);

    return [products];

}

export default useProducts;