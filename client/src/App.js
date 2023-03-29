import React, {useEffect,useState} from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Admin from './pages/admin';
import AdminDashboard from './pages/AdminDashboard';
import AddCompany from './pages/AddCompany';

const App = () => {
  const [initialUser, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const {user} = useAuthContext();


  useEffect(() => {
    setUser(user);
    setLoading(false);
  }, [user]);
  if(!loading) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        {!initialUser && 
        <>
  
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        </>
        }
        <Route path="/admin" element={<Admin />} />
        <Route path="/add-company" element={user ? <AddCompany />: <Navigate to="/login"/>} />
        <Route path="/admin/dashboard" element={ <AdminDashboard />} />
  
        {/* <Route path="*"  element={<Navigate to="/"/>} /> */}
      </Routes>
    );
  }
  
}

export default App;