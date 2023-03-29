import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from './useAuthContext';
import {useNavigate} from 'react-router-dom';

const useSignup = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (email, password) => {
        try {
            setLoading(true);
            setError(null);
            const { data } = await axios.post('/api/user/signup', { email, password },{ headers:{
                'Content-Type': 'application/json'
            }});
            if(!data.error){
                localStorage.setItem('user', JSON.stringify(data));
                dispatch({ type: 'LOGIN', payload: data });
                setLoading(false);
                navigate('/');
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

    return { signup, error, loading };
}

export default useSignup;
