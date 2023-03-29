import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState,useCallback } from "react";

const useAdminDashboard = () => {
    const [data, setData] = useState([])
    const [expiry, setExpiry] = useState(null);

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchAdmin = useCallback(async () => {
        setLoading(true);
        setError(null);
        try{
            const data =  await axios.get('/api/admin/dashboard', { headers: { 'Content-Type': 'application/json'} });
        if( data.status === 200){
            setExpiry(data.data.adminExpiryTime);
            setData(data.data.listedCompanies)
            setLoading(false);
            return true;
        } else{
            setError(data.data.error);
            setLoading(false);
            navigate('/admin');
        }
        } catch(error){
            if(error.response.status === 401){
                navigate('/admin');
            }
        }
    }, [navigate]);
    return { fetchAdmin, data, expiry, error, loading };

};
export default useAdminDashboard;