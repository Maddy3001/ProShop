const express = require('express');
const cors = require('cors');
const app = express();
const secretKey = "secretKey"
const jwt = require('jsonwebtoken')
const { showData, showAllData, saveData, calcAmount, deleteProduct, sortData } = require('../dataAccessLayers/dboperations');

app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

app.get('/getproductDetails/:id', function (req, res) {
    showData(req.params.id, function (response) {
        res.send(response)
    });
});

app.get('/getproductDetails', function (req, res) {
    showAllData(req, function (response) {
        res.send(response)
    });
});

app.post('/saveData', function (req, res) {
    saveData(req.body, function (response) {
        res.send({
            message: "data saved successfully"
        })
    })
})

app.get('/showAmount', function (req, res) {
    calcAmount(req, function (response) {
        res.send(response)
    })
})

// app.get('/conditionalData/:Amount?/:pId?', function (req, res) {
//     const { Amount, pId } = req.params
//     conditionalData(Amount, pId, function (response) {
//         res.send(response)
//     })
// })

app.delete('/deleteProduct/:id', function (req, res) {
    deleteProduct(req.params.id, function (response) {
        res.send(response);
    })
})

app.post('/sortData', function (req, res) {
    sortData(req.body, function (response) {
        res(response);
    })
})

app.post('/login', function (req, res) {
    const user = {
        userName: req.body.userName,
        password: req.body.password
    }
    jwt.sign({ user }, secretKey, { expiresIn: '300s' }, function (error, token) {
        res.json({
            token
        })
    })
})

app.listen(8080);
