import React, { useState,useContext } from "react";
import Card from "./UI/Card";
import CompanyDetails from "./CompanyDetails";
import { CompanyContext } from "../store/company-context";
// import { useEffect } from "react";
import classes from "../styles/Companies.module.css";

// import { FiCheck } from "react-icons/fi";
// import { AiOutlineDelete, AiOutlineEye, AiOutlineEyeInvisible  } from "react-icons/ai";

const Companies = (props) => {
    const companyCtx = useContext(CompanyContext);
    // const [updated, setUpdated] = useState(false);
    const [showDetails, setShowDetails] = useState({
        show: false,
        id: null,
        company: {}
    });
    // useEffect(() => {
    //     if (updated) {
    //         console.log("updated");
    //         setUpdated(false);
    //     }
    // }, [props.companies, updated]);

    const showDetailsHandler = (e) => {
        const id = e.target.id;
        const company = props.companies.find((company) => company._id === id);
        setShowDetails({
            show: !showDetails.show,
            id: id,
            company: company
        });
    }
    const approveCompanyHandler = (e) => {
        const id = e.target.getAttribute("companyid");
        const company = props.companies.find((company) => company._id === id);
        companyCtx.approveCompany(company);
        // setUpdated(true);
    }

    const deleteCompanyHandler = (e) => {
        const id = e.target.getAttribute("dataid");
        console.log(id);
        companyCtx.removeCompany(id);
        // setUpdated(true);
    }
  return (
    <div className={classes.companies}>
      <h1>Waiting List</h1>
      <div className={classes.companiesList}>
        {props.companies.map((company) => {
          return (
            <>
            <Card key={company._id}>
              <div className={classes.company}>
                <img src={company.logo} alt="company logo" />
                <div>
                  <small className={classes.status}>Pending Approval</small>
                  <h4>{company.companyName}</h4>
                </div>
                <div className={classes.options}>
                  <small onClick={approveCompanyHandler} companyid={company._id}>Approve</small>
                  <small onClick={deleteCompanyHandler} dataid={company._id}>Delete</small>
                  <small onClick={showDetailsHandler} id={company._id}>{showDetails.show && showDetails.id === company._id ? "close" : "view"}</small>
                </div>
              </div>
            </Card>
            {showDetails.show && showDetails.id === company._id && <CompanyDetails onShowDetails={showDetails} key={company.addedBy} company={company} />}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Companies;
