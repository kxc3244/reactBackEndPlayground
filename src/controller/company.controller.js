const httpStatus = require('http-status');
const {companyService } = require('../services');
const createNewCompany = async (req, res) => {
const {companyName,careerUrl} =req.body
console.log(companyName,'req.body company controller');
  const comp = await companyService.createNewCompany({
      companyName,
      careerUrl
  });
 console.log(comp,'comp');
 res.status(httpStatus.CREATED).send(comp);
 return comp
};

const getAllCompanies = async (req, res) => {
  // const {companyName} =  req.query
    const comp = await companyService.getAllCompanies();
   console.log(comp,'comp');
   res.status(httpStatus.CREATED).send(comp); 
   return comp
  };

const getCompany = async (req, res) => {
  const {companyName} =  req.query
    const comp = await companyService.getCompany(companyName);
   console.log(comp,'comp');
   res.status(httpStatus.CREATED).send(comp); 
   return comp
  };

const deleteCompany = async (req, res) => {
  const {id} =  req.query
    const comp = await companyService.deleteCompany(id);
   console.log(comp,'comp');
   res.status(httpStatus.OK).send(comp); 
   return comp
  };

const editCompany = async (req, res) => {
  const {id} =  req.query
  const bod =  req.body
  
    const comp = await companyService.editCompany(bod,id);
   console.log(comp,'comp');
   res.status(httpStatus.CREATED).send(comp); 
   return comp
  };


module.exports = {
  createNewCompany,
  getAllCompanies,
  deleteCompany,
  getCompany,
  editCompany
};