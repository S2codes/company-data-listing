import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import Card from "../components/UI/Card";

import "../index.css"
import Footer from "../components/UI/Footer";
import { Link } from "react-router-dom";
import Hero from "../components/UI/Hero";

const Home = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    console.log("useEffect");
    try {
      axios.get("/api/company/getcompanies", {
        headers: { "Content-Type": "application/json" },
      }).then((response) => {
        console.log("response", response.data.companies);
        setCompanies(response.data.companies);
      })
    } catch (err) {
      console.log("err: ", err);
    }
  }, []);

  return (
    <>
      <Nav />

      <Hero/>

      <div className="container-fluid section-bg">

        <div className="row">
          <div className="col-md-11 col-12 mx-auto">

            <div className="comapany-by-category-sec my-3">
              <div className="company-category-group">
                <p className="company-category-title">Featured Startups</p>
                <Link to="/featured-startup" className="company-category-more">View All </Link>
              </div>

              <div className="row mb-4">

                {companies.map((company) => (
                  <Card key={company._id} data={company} />
                ))} 


              </div>

            </div>


          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default Home;
