const Companies = require("../models/Companies");

const addCompany = async ({ companyDetails }) => {
  try {
    // Find if the company already exist
    const foundCompany = await Companies.findOne({
      companyName: companyDetails.companyName,
    });

    if (foundCompany) {
      throw new Error("Company already exist");
    } else {
      const newCompany = await Companies.create(companyDetails);
      return newCompany;
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = addCompany;
