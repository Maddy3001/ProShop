const express = require('express')  // require express framework
const app = express();
const cors = require('cors')
const secretKey = "secretKey"

const jwt = require('jsonwebtoken')


app.get('/', function (req, res) {
    res.json({
        message: "a sample api"
    })
})

app.post('/login', function (req, res) {
    const user = {
        id: 1,
        userName: "anil",
        email: "abc@test.com"
    }
    jwt.sign({ user }, secretKey, { expiresIn: '300s' }, function (error, token) {
        res.json({
            token
        })
    })
})

app.post('/profile', verifyToken, function (req, resp) {
    jwt.verify(req.token,secretKey,function(error,authData){
        if(error){
            resp.send({
                result : "invalid token"
            })
        }else {
            resp.json({
                message : "token verified successfully",
                authData
            })
        }
    })
})

function verifyToken(req, resp, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader != 'undefined') {
        const bearer = bearerHeader.split(' ').pop()
        req.token = bearer;
        next();
    } else {
        resp.send({
            result: 'Token is invalid'
        })
    }
}



app.listen(5000, function () {
    console.log('app is running on 5000 port');
})