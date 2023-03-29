import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const logout = async () => {
    try {
      const response = await axios.post("/api/user/logout", {
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.data;
      console.log(data);
      localStorage.removeItem("user");

      dispatch({ type: "LOGOUT" });
      navigate("/login");
    } catch (err) {
      if (err.response.status === 401) {
        console.log("logout error");
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
        navigate("/login");
      }
    }
  };
  const adminLogout = async () => {
    try {
      const response = await axios.post("/api/admin/logout", {
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.data;
      console.log(data);
      navigate("/admin");
    } catch (err) {
      if (err.response.status === 401) {
        console.log("logout error");
        navigate("/admin");
      }
    }
  };

  return { logout, adminLogout };
};
