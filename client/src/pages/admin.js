import AddminLogin from "../components/AdminLogin";
import useAdminDashboard from "../hooks/useAdminDahboard";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
const Admin= () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { fetchAdmin, error, loading } = useAdminDashboard();

  useEffect(() => {
    fetchAdmin();
    setIsAdmin(true);
  }, [fetchAdmin]);

  return (
    <>
        {!loading && isAdmin? <Navigate to="/admin/dashboard" /> : <AddminLogin />}
        {error && <p>{error}</p>}
    </>
  );
};

export default Admin;