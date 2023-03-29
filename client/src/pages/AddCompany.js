import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useImage from "../hooks/useImage";
import Card from "../components/UI/Card";

import Nav from "../components/Nav";
import classes from "../styles/AddCompany.module.css";
import axios from "axios";
const AddCompany = () => {
  const navigate = useNavigate();
  const formRef = useRef();
  const logoRef = useRef();

  const { uploadImage, loading, error } = useImage();
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const companyDetails = {};
    for (let key of formData.keys()) {
      companyDetails[key] = formData.get(key);
    }
    const logo = logoRef.current.files[0];
    const imageUrl = await uploadImage(logo);
    companyDetails.logo = imageUrl.url;
    companyDetails.addedBy = JSON.parse(localStorage.getItem("user")).userId;

    console.log(companyDetails);
    axios.post("/api/company", { companyDetails }).then((res) => {
      res.data && navigate("/")
    });
  };

  return (
    <>
      <Nav />
      <div className={classes["card-container"]}>
        <Card>
          <div className={classes.wrapper}>
            <div>
              <h1>Please fill in your startups details in this form</h1>
            </div>
            <div>
              <form
                className={classes["form-control"]}
                ref={formRef}
                onSubmit={submitHandler}
              >
                <div className={classes.inputs}>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    placeholder="Company Name"
                    required
                  />

                  <input
                    type="text"
                    name="registeredName"
                    id="RegisterdName"
                    placeholder="Registerd Name"
                    required
                  />

                  <textarea
                    name="oneLiner"
                    id="companyDescription"
                    cols="45"
                    rows="7"
                    placeholder="One liner about your company (80-250 char)"
                    required
                  ></textarea>

                  <textarea
                    name="description"
                    id="companyDescription"
                    cols="45"
                    rows="10"
                    placeholder="Brief description of your company (500-1000 char)"
                    required
                  ></textarea>

                  <input
                    type="email"
                    name="email"
                    id="companyEmail"
                    placeholder="Primary email address"
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    id="companyPhone"
                    placeholder="Phone number"
                    required
                  />

                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    name="logo"
                    id="companyLogo"
                    placeholder="Your company Logo"
                    required
                    ref={logoRef}
                  />

                  <input
                    type="url"
                    name="website"
                    id="companyWebsite"
                    placeholder="Company Website link"
                    required
                  />

                  <input
                    type="date"
                    name="incorporatedDate"
                    id="incorporatedDate"
                    placeholder="Incorporated Date"
                    required
                  />

                  <input
                    type="text"
                    name="companyHQ"
                    id="companyHq"
                    placeholder="Company HQ"
                    required
                  />

                  <label htmlFor="businessModel">Business Model</label>
                  <select
                    name="businessModel"
                    id="businessModel"
                    placeholder="Business Model"
                    required
                  >
                    <option value="B2B">B2B</option>
                    <option value="B2C">B2C</option>
                    <option value="B2B2C">B2B2C</option>
                    <option value="C2C">C2C</option>
                    <option value="B2G">B2G</option>
                    <option value="D2C">D2C</option>
                  </select>

                  <input
                    type="number"
                    name="numberOfEmployees"
                    id="NumberOfEmployees"
                    placeholder="Number of Employees"
                    required
                  />

                  <input
                    type="text"
                    name="founder1Name"
                    id="Founder1Name"
                    placeholder="Founder 1 Name"
                    required
                  />

                  <input
                    type="url"
                    name="founder1LinkedinProfile"
                    id="Founder1Linkedin"
                    placeholder="Founder 1 Linkedin Profile"
                  />

                  <input
                    type="text"
                    name="founder2Name"
                    id="Founder2Name"
                    placeholder="Founder 2 Name"
                  />

                  <input
                    type="url"
                    name="founder2LinkedinProfile"
                    id="Founder2Linkedin"
                    placeholder="Founder 2 Linkedin Profile"
                  />

                  <label htmlFor="CompanyCatagory">Company Catagory</label>
                  <select
                    name="companyCategories"
                    id="CompanyCatagory"
                    required
                  >
                    <option value="Administrative Services">
                      Administrative Services
                    </option>
                    <option value="AdTech">AdTech</option>
                    <option value="Aerospace & Defense">
                      Aerospace & Defense
                    </option>
                    <option value="AgriTech">AgriTech</option>
                    <option value="Analytics & BI">Analytics & BI</option>
                    <option value="Animation & Filmography">
                      Animation & Filmography
                    </option>
                    <option value="Art & Design">Art & Design</option>
                    <option value="cAutomotive">Automotive</option>
                    <option value="BioTech">BioTech</option>
                    <option value="Blockchain">Blockchain</option>
                    <option value="Clothing & Apparel">
                      Clothing & Apparel
                    </option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Communication">Communication</option>
                    <option value="Community">Community</option>
                    <option value="Construction">Construction</option>
                    <option value="Consumer Services">Consumer Services</option>
                    <option value="Consumer Electronics">
                      Consumer Electronics
                    </option>
                    <option value="Content">Content</option>
                    <option value="Cryptocurrency">Cryptocurrency</option>
                    <option value="DeepTech">DeepTech</option>
                    <option value="Design">Design</option>
                    <option value="Direct-To-Consumer Brands">
                      Direct-To-Consumer Brands
                    </option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="EdTech">EdTech</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Events">Events</option>
                    <option value="FinTech">FinTech</option>
                    <option value="FoodTech">FoodTech</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Retail">Retail</option>
                    <option value="SaaS">SaaS</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Software">Software</option>
                    <option value="SpaceTech">SpaceTech</option>
                    <option value="Technology">Technology</option>
                    <option value="Tourism">Tourism</option>
                    <option value="Travel">Travel</option>
                    <option value="Other">Other</option>
                  </select>

                  <label htmlFor="RevenueStream">Revenue Stream</label>
                  <select name="revenueStream" id="RevenueStream" required>
                    <option value="Advertising">Advertising</option>
                    <option value="Affiliate Marketing">
                      Affiliate Marketing
                    </option>
                    <option value="Commission on transaction">
                      Commission on transaction
                    </option>
                    <option value="Donations">Donations</option>
                    <option value="E-commerce - Product">
                      E-commerce - Product
                    </option>
                    <option value="E-commerce - Service">
                      E-commerce - Service
                    </option>
                    <option value="Fee-For-Service">Fee-For-Service</option>
                    <option value="Interest">Interest</option>
                    <option value="Freemium">Freemium</option>
                    <option value="Lending">Lending</option>
                    <option value="Licensing">Licensing</option>
                    <option value="Physical Commerce">Physical Commerce</option>
                    <option value="Subscription">Subscription</option>
                    <option value="Other">Other</option>
                  </select>

                  <label htmlFor="FundraisingStage">Fundraising Stage</label>
                  <select name="fundingDetails" id="FundraisingStage" required>
                    <option value="Bootstrapped">Bootstrapped</option>
                    <option value="External Funding Raised">
                      External Funding Raised
                    </option>
                  </select>

                  <input
                    type="number"
                    name="latestFundingAmount"
                    id="latestFundraisingAmount"
                    placeholder="Latest Fundraising Amount"
                  />

                  <label htmlFor="latestFundingDate">
                    Latest Fundraising Date
                  </label>
                  <input
                    type="date"
                    name="latestFundingDate"
                    id="latestFundraisingDate"
                  />

                  <label htmlFor="latestFundraisingRound">
                    Latest Fundraising Round
                  </label>
                  <select
                    name="latestFundingRound"
                    id="latestFundraisingRound"
                    required
                  >
                    <option value="Angel">Angel</option>
                    <option value="Seed">Seed</option>
                    <option value="Series A">Series A</option>
                    <option value="Series B">Series B</option>
                    <option value="Series C">Series C</option>
                    <option value="Series D">Series D</option>
                    <option value="Series E">Series E</option>
                    <option value="Series F">Series F</option>
                    <option value="Series G">Series G</option>
                    <option value="Series H">Series H</option>
                    <option value="Series I">Series I</option>
                    <option value="Series J">Series J</option>
                    <option value="IPO">IPO</option>
                  </select>

                  <input
                    type="number"
                    name="LatestFundingAmount"
                    id="LatestFundrasingAmount"
                    placeholder="Latest Fundrasing Amount $"
                  />

                  <label htmlFor="TargetGroup">Target Group</label>
                  <select name="targetGroup" id="TargetGroup">
                    <option value="Business only (B2B)">
                      Business only (B2B)
                    </option>
                    <option value="Customers only (B2C)">
                      Customers only (B2C)
                    </option>
                    <option value="Business and Customers (B2B & B2C)">
                      Business and Customers (B2B & B2C)
                    </option>
                  </select>

                  <div className={classes.submit}>
                    <button type="submit" disabled={loading}>
                      Submit
                    </button>
                  </div>
                  {error && <p>"went wrong"</p>}
                </div>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default AddCompany;
