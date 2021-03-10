const Record = require('../models/record.model');
const createNewRecord = async (input) => {
 const {_id,
        universityName,
        graduationYear,
        jobTitle,
        jobStartDate} =input
  const record = await Record.create({
        _id,
        universityName,
        graduationYear,
        jobTitle,
        jobStartDate
  });
  ;
//   console.log(company,'company from service ');
  return record;
};

const deleteRecord = async (_id) => {
//  const {_id} =input
  const record = await Record.findByIdAndDelete(_id);
  ;
//   console.log(company,'company from service ');
  return record;
};

const editRecord = async (input) => {
    console.log(input,'input');
    try {
  
      const record = await Record.findByIdAndUpdate({
        _id:input._id
      },{$set:{...input}})
      ;
      console.log(record,'record');
      return record;
    }
    catch(e){
      console.log(e,'ERROR');
    }
  };

  const getAllRecords = async () => {
    const com = await Record
    .find({})
    .populate('company',['companyName','careerUrl'])
    
    return com;
  };




module.exports = {
    createNewRecord,
    deleteRecord,
    editRecord,
    getAllRecords
  };