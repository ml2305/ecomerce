import { useState, useEffect } from 'react';
import axios from 'axios';

const useBrands = (url) => {

    const [brands, setBrands] = useState();

    const fetchBrands = (path) => {
        axios.get(process.env.REACT_APP_HTTP + path)
            .then(res => {
                setBrands(res.data);
            })
            .catch(() => {
                setBrands('An error has occured, please reload');
            });
    }

    useEffect(() => {
        if (url) {
            fetchBrands(url);
        }
    }, []);

    return [brands];

}

export default useBrands;