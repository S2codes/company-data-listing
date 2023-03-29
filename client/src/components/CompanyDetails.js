import classes from "../styles/CompanyDetails.module.css";
import Card from "./UI/Card";

const CompanyDetails = (props) => {
  const { company, onShowDetails } = props;
  const { show } = onShowDetails;
  return (
    <>
      {show && (
        <>
        <Card>
        <div className={classes.companyDetails}>
           <div>
            <label>Company Name :</label>
            <p>{company.companyName}</p>
           </div>
           <div>
            <label>Registered Name :</label>
            <p>{company.registeredName}</p>
           </div>
           <div>
            <label>Company Website :</label>
            <a target="_blank" rel="noreferrer" href={company.website}>{company.website}</a>
           </div>
           <div>
            <label>Company Email :</label>
            <p>{company.email}</p>
           </div>
           <div>
            <label>Company Description :</label>
            <p>{company.description}</p>
           </div>
           <div>
            <label>Incorporate Date :</label>
            <p>{company.incorporatedDate}</p>
           </div>
           <div>
            <label>Company Founder :</label>
            <p>{company.founder1Name}</p>
           </div>
           <div>
            <label>Company Category :</label>
            <p>{company.companyCategories}</p>
           </div>
           <div>
            <label>Company Headquarter :</label>
            <p>{company.companyHQ}</p>
           </div>
           <div className={classes.fundingDetails}>
           <h4>Funding Details</h4>
           <div className={classes.fundings}>
            <div>
            <label>Funding Type :</label>
            <p>{company.fundingDetails}</p>
            </div>
            <div>
            <label>Last Funding Date :</label>
            <p>{company.latestFundingDate}</p>
            </div>
            <div>
            <label>Last Funding Type :</label>
            <p>{company.latestFundingRound}</p>
            </div>
            <div>
            <label>Last Funding Amount :</label>
            <p>{company.latestFundingAmount}</p>
            </div>
           </div>
           </div>
           <div>
            <label>No. of Employees :</label>
            <p>{company.numberOfEmployees}</p>
           </div>
           <div>
            <label>Revenue Stream :</label>
            <p>{company.revenueStream}</p>
           </div>
           <div>
            <label>Target Group :</label>
            <p>{company.targetGroup}</p>
           </div>
        </div>
        </Card>
        </>
      )}
    </>
  );
};

export default CompanyDetails;
