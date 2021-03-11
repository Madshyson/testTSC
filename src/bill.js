const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testTCS', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
const tcsDB = require('../dbConfig/dbShema');

let addBill = function (params, callback) {
    tcsDB.Bill.insert();
}

let delBill = function (params, callback) {

}

let getAllBill = function (params, callback) {

}

let getOneBill = function (params, callback) {

}

module.exports = {addBill, delBill, getAllBill, getOneBill};