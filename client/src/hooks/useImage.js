import { useState } from 'react';
import axios from 'axios';

const useImage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getSign = async () => {
        setLoading(true);
        try {
        const {data} = await axios.post('/api/image/get-sign');
        return data;
        } catch (err) {
            console.log(err);
        setError(err);
        } finally {
        setLoading(false);
        }
    }

    const uploadImage = async (file) => {
        setLoading(true);
        try {
        const { signature, timestamp } = await getSign();
        const API_KEY = '951518873165815';
        const cloud_name = 'dziwprjkd';
        const URL = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('api_key', API_KEY)
        formData.append('signature', signature);
        formData.append('timestamp', timestamp);
        const {data} = await axios.post(URL, formData);
        return {url:data.secure_url, imageId: data.public_id}
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError(err);
        } finally {
        setLoading(false);
        }
    }

    return { uploadImage, loading, error };
 

  
}

export default useImage;