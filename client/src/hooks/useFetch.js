import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(
        () => {
            axios.get(url, { headers: { 'Content-Type': 'application/json'} })
                .then(res => {
                    setData(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    , [url]);
    

    return { data };
}


export default useFetch;