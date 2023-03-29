import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAdmin = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const visitAdmin = async (userId, password) => {
        try {
            setLoading(true);
            setError(null);
            const { data } = await axios.post('/api/admin', { userId, password },{ headers:{
                'Content-Type': 'application/json'
            }})
            if(!data.error){
                setError(null);
                setLoading(false);
                navigate('/admin/dashboard');
            } else{
                setError(data.error);
                setLoading(false);
            }
        } catch (err) {
            console.log("err: ", err);
            setError(err);
            setLoading(false);
        }
    }

    return { visitAdmin, error, loading };
}


export default useAdmin;