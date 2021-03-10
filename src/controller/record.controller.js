const httpStatus = require('http-status');
const {recordService } = require('../services');
const Company = require('../models/company.model');
const {companyService } = require('../services');
const createNewRecord = async (req, res) => {
  // console.log(req.body,'controller req body')
const {companyName, careerUrl, universityName,graduationYear,jobTitle,jobStartDate} =req.body

const companyInput = {
  companyName, careerUrl
}
const recordInput = {
  universityName,graduationYear,jobTitle,jobStartDate
}
const companyExists = await companyService.getCompany(companyName);
let newRecordInput;
if(companyExists.length > 0) {
   newRecordInput = {...recordInput,company:companyExists[0]._id}
}
else {
  const comp = await companyService.createNewCompany(companyInput)
   newRecordInput = {...recordInput,company:comp._id}
}
  const record = await recordService.createNewRecord(newRecordInput);
 console.log(record,'record');
 res.status(httpStatus.CREATED).send(record);
 return record
};

const deleteRecord = async (req,res) => {
  const {id} =  req.query
  const bod =  req.body
  const record = await recordService.deleteRecord(id,bod)
  res.status(httpStatus.CREATED).send(record);
  return record
}

const editRecord = async (req, res) => {
  const comp = await recordService.editRecord(req.body);
 console.log(comp,'comp');
  res.status(httpStatus.CREATED).send(comp);
};

const getAllRecords = async (req, res) => {
  comp = await recordService.getAllRecords()
  res.status(httpStatus.CREATED).send(comp);
} 



module.exports = {
  createNewRecord,  
  deleteRecord,
  editRecord,
  getAllRecords
};