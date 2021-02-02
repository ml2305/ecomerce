import {useState, useEffect} from 'react';
import axios from 'axios';

const useHttp = (url) => {

    const http = 'http://localhost:8080';

    const [data, setData] = useState();

    const fetchData = (path, type, object) => {
        if(type === 'get') {
            axios.get(http + path)
        .then(res => {
            setData(res.data);
        });
        }
        else {
        axios.post(http + path, {products: object.products})
        .then(response => {
            setData('Successfully placed the order id:' + response.data.id + ' total price: ' + response.data.totalPrice) ;
        })
        .catch(err => {
            setData( 'An error has occured, please retry ordering!');
        }); 
        }
    }

    useEffect(() => {
        if(url){
            fetchData(url, 'get');
        }
    }, []);
    
    return [data, fetchData];
    
}

export default useHttp;