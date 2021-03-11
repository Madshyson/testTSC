import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const { Schema } = mongoose;

const bill = new Schema({
    numero:  String,
    date: { type: Date, default: Date.now },
    client : {
        name : String,
        email : String
    },
    produits: [{
        code : String,
        name : String,
        price : mongoose.Decimal128,
        quantite : Number
    }],
    total : mongoose.Decimal128
});

const user = new Schema({
    mail : String,
    password : String,
    uniqueId : String,
    salt : String
});

const db = mongoose.connection;

module.exports = {bill, user, db};