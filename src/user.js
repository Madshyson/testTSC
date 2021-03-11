const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testTCS', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;


const hash  = require('./utils/hash');
const tcsDB = require('../dbConfig/dbShema');
const jwt = require('jsonwebtoken');


let login = async function (req, res) {
    try {
        await tcsDB.User.find({mail : req.body.mail}).exec((err, user) => {
            if (user) {
                const pswd = hash.sha512(req.body.password, user[0].salt);
                if (pswd === user[0].password) {
                    res.status(200).send({token: jwt.sign({mail : user.mail, uniqueId : user.uniqueId}, 'secret', {expiresIn: '4h'})});
                } else {
                    res.status(400).send({
                        message: `Erreur dans la connexion de l'utilisateur`
                    });
                }
            } else {
                res.status(400).send({
                    message: `Erreur dans la connexion de l'utilisateur`
                });
            }
        });
    } catch (err) {
        res.status(500).send({
            message: `Erreur dans la connexion de l'utilisateur`
        });
    }
}

module.exports = {login};