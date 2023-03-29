const Companies = require("../models/Companies");

const deleteCompany = async (companyId) => {
  try {
    const deletedCompany = await Companies.findByIdAndDelete(companyId);

    if (!deletedCompany) {
      throw new Error("Company not found");
    } else {
        return deletedCompany;
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = deleteCompany;
