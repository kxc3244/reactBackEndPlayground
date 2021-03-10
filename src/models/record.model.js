const mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');
const recordSchema = mongoose.Schema(
  {
    company: { type: mongoose.Schema.Types.ObjectId,ref : 'Company'},
    isApproved: {type: Boolean, default: false},
    universityName: {type: String},
    graduationYear: {type: Number,min: 1950, max:2021},
    specialization: {type: String},
    jobTitle: {type: String},
    jobStartDate: {type: Date, default: Date.now()},
    },
    
  
  {
    timestamps: true,
  }
);
// companySchema.plugin(uniqueValidator);
const Record = mongoose.model('Record', recordSchema);
module.exports = Record;