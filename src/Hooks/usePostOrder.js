import {useState} from 'react';
import axios from 'axios';

const usePostOrder = () => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    
    const fetchOrder = (path, object) => {
        setLoading(true);
            axios.post(process.env.REACT_APP_HTTP + path, { products: object.products })
                .then(response => {
                    setData(`Successfully placed the order id: ${response.data.id}  total price:  ${response.data.totalPrice}`);
                    setLoading(false);
                })
                .catch(() => {
                    setData('An error has occured, please retry ordering!');
                    setLoading(false);
                });
    }

    return [{data, loading}, fetchOrder];
}

export default usePostOrder;