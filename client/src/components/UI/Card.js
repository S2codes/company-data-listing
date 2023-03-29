import { NavLink } from 'react-router-dom'
import classes from '../../styles/Card.module.css'
// import "../../assets"
const Card = (props) => {
    console.log("Card props");
    console.log(props.data);
    const company = props.data
    return (

        <div className="col-md-4 col-12">
            <div className={classes.card}>

                <div className={`${classes.cardHeader} mb-2`}>
                    <img src={company.logo} alt="logo" className={classes.companyLogo} />
                    <div className={classes.companyDescription}>
                        <p className={classes.companyTitle}>{company.companyName}</p>
                        <p className={classes.companyDetails}>{company.description}</p>
                    </div>
                </div>

                <NavLink to={`company/${company._id}`} className={`${classes.viewBtn} mb-3`}>View More</NavLink>

                <div className={classes.iconGroup}>
                    <div className="iconLeft">
                        <i className="bi bi-tag"></i> {company.businessModel}
                    </div>
                    <div className="iconRight">
                        <i className="bi bi-geo-alt"></i> {company.companyHQ}
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Card