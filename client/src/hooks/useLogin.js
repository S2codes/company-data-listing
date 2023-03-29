import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from './useAuthContext';


const useLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        try {
            setLoading(true);
            setError(null);
            const { data } = await axios.post('/api/user/login', { email, password },{ headers:{
                'Content-Type': 'application/json'
            }})
            if(!data.error){
                localStorage.setItem('user', JSON.stringify(data));
                dispatch({ type: 'LOGIN', payload: data });
                setLoading(false);
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

    return { login, error, loading };
}

export default useLogin;
