// const deleteCompany = require("./deleteCompany");
const Company = require("../models/Companies");

const approveCompanies = async (company) => {
    try {
        const newCompany = await Company.findById({ _id: company._id });
        newCompany.isApprvoed = true;
        await newCompany.save();
        return newCompany;
    } catch (error) {
        throw new Error(error);
    }
    }

module.exports = approveCompanies;