const express = require('express');
const companyController = require('../../controller/company.controller');
const router = express.Router();
router.post('/createnewcompany', companyController.createNewCompany);
router.get('/getall', companyController.getAllCompanies);
router.get('/getcompany', companyController.getCompany);
router.post('/deletecompany', companyController.deleteCompany);
router.put('/editcompany', companyController.editCompany);

module.exports = router;