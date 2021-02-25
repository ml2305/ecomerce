import { useState, useEffect } from 'react';
import axios from 'axios';

const useHttp = (url) => {

    const [data, setData] = useState();

    const fetchData = (path) => {
        axios.get(process.env.REACT_APP_HTTP + path)
            .then(res => {
                setData(res.data);
            })
            .catch(() => {
                setData('An error has occured, please reload');
            });
    }

    useEffect(() => {
        if (url) {
            fetchData(url);
        }
    }, []);

    return [data, fetchData];

}

export default useHttp;