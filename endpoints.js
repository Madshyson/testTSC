const User = require('./src/user');
const Bill = require('./src/bill');

module.exports = function(app) {
    app.post('/user/login', (req, res) => {
        console.log('API Endpoint -- login');
        User.login(req, res);
    });

    app.post('/bills/add', (req, res) => {
        console.log('API Endpoint -- bill add');
        Bill.addBill(req, res);
    });

    app.delete('/bills/:id/:uId', (req, res) => {
        console.log('API Endpoint -- bill delete');
        Bill.delBill(req, res);
    });

    app.get('/bills/getOne/:id/:uId', (req, res) => {
        console.log('API Endpoint -- bill get one');
        Bill.getOneBill(req, res);
    });

    app.get('/bills/getAll/:uId', (req, res) => {
        console.log('API Endpoint -- bill get ALl');
        Bill.getAllBill(req, res);
    });
}