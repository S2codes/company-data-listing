import React from "react";
import axios from "axios";

const CompanyContext = React.createContext({
  updatedCompany: null,
  approveCompany: (company) => {},
  removeCompany: (companyId) => {},
});

const CompanyContextProvider = (props) => {
  const approveCompany = (company) => {
    axios
      .post(
        "/api/admin/approve-company",
        { company },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        console.log("approveCompany", response);
      })
      .catch((error) => {
        console.log("approveCompany", error);
      });
  };

  const removeCompany = async (companyId) => {
    try {
      const response = await axios.delete("/api/admin/delete-company", {
        headers: { "Content-Type": "application/json" },
        data: { companyId },
      });
      console.log("removeCompany", response);
    } catch (error) {
      console.log("removeCompany", error);
    }
  };

  return (
    <CompanyContext.Provider value={{ approveCompany, removeCompany }}>
      {props.children}
    </CompanyContext.Provider>
  );
};

export { CompanyContext, CompanyContextProvider };
