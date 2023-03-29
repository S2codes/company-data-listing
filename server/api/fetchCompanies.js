const Company = require("../models/Companies");

const addToCompanies = async (company) => {
    try {
        const allCompanies = await Company.find({isApprvoed: true});
        return allCompanies;
    } catch (error) {
        throw new Error(error);
    }
    }

module.exports = addToCompanies;