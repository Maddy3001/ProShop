const fs = require('fs');

function getUserData(req,res){
    console.log(req, "request");

    const { firstName , lastName, age } = req;

    // let data = fs.readFileSync('file.txt')
    // // res(data)
    let name = {
        firstName : `contains ${firstName.length} elements`,
        lastName : `contains ${lastName.length} elements`,
        age : `contains ${age.length} elements`
    }
    res(name)
}

module.exports = {
    getUserData : getUserData
}