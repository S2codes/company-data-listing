import React from "react";
// import axios from 'axios';
import { useEffect, useState } from "react";
import useAdminDashboard from "../hooks/useAdminDahboard";

import AdminPanel from "../components/AdminPanel";

const AdminDashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { fetchAdmin, data, expiry, error, loading } = useAdminDashboard();

  useEffect(() => {
    fetchAdmin();
    setIsAdmin(true);
  }, [fetchAdmin]);

  if (!loading && isAdmin) {
    return (
      <div>
        <AdminPanel companies={data} logoutTimer={expiry}/>
        {/* {data &&
          data.map((company) => (
            <>
              <p key={company._id}>{company.email}</p>{" "}
              <img
                key={company.phone}
                src={company.logo}
                style={{ width: 200, height: 200 }}
                alt="company-logo"
              />
            </>
          ))} */}
        
        {error && <p>{error}</p>}
      </div>
    );
  }
};

export default AdminDashboard;
