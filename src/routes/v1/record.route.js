const express = require('express');
const recordController = require('../../controller/record.controller');
const router = express.Router();
router.post('/createnewrecord', recordController.createNewRecord);
router.delete('/deleterecord', recordController.deleteRecord);
router.put('/editrecord', recordController.editRecord);
router.get('/getallrecords', recordController.getAllRecords);

module.exports = router;