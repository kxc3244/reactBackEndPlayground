const Company = require('../models/company.model');
const createNewCompany = async (input) => {
 const {companyName,careerUrl} =input
  const companies = await Company.create({
    companyName,
    careerUrl
  });
  ;
//   console.log(company,'company from service ');
  return companies;
};


const getAllCompanies = async () => {
 
  const company = await Company.find();
  ;
//   console.log(company,'company from service ');
  return company;
};
const getCompany = async (name) => {
 
  const company = await Company.find({companyName : name});
  ;
//   console.log(company,'company from service ');
  return company;
};

const deleteCompany = async (id) => {
 
  const company = await Company.deleteOne({_id : id});
  ;
//   console.log(company,'company from service ');
  return company;
};

const editCompany = async (bod,id) => {
        // const {id} = input;
      const company = await Company.findByIdAndUpdate({ _id : id },bod);
      const comp = await Company.find({companyName : name});

      ;
    //   console.log(company,'company from service ');
      return comp;
    };


module.exports = {
    createNewCompany,
    getAllCompanies,
    getCompany,
    deleteCompany,
    editCompany
  };