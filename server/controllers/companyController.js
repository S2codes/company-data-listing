const addCompany = require('../api/addcompany');
const deleteCompany = require('../api/deleteCompany');
const approveCompanies = require('../api/approveCompany');
const fetchCompanies = require('../api/fetchCompanies');

const addNewCompany = async (req, res) => {
    const { companyDetails } = req.body;
    try {
        const newCompany = await addCompany({ companyDetails });
        res.json({ newCompany });
    } catch (error) {
        res.json({ error: error.message });
    }
}

const removeCompany = async (req, res) => {
    const { companyId } = req.body;
    try{
        await deleteCompany(companyId);
        res.json({ message: 'Company deleted' });

    } catch (error) {
        res.json({ error: error.message });
    }
    
}

const approveCompany = async (req, res) => {
    const { company } = req.body;
    try {
        await approveCompanies(company);
        res.json({ message: 'Company approved' });
    } catch (error) {
        res.json({ error: error.message });
    }
}

const getAllCompanies = async (req, res) => {
    try {
        const companies = await fetchCompanies();
        res.json({ companies });
    } catch (error) {
        res.json({ error: error.message });
    }
};

module.exports = { addNewCompany, removeCompany, approveCompany, getAllCompanies};