function getBlogDetails(req,res){
    console.log(req,"reqqq");

    const { title, description,age } = req;

    let name = `${title} is ${description} and age is ${age}`

    res(name)
}

module.exports = {
    getBlogDetails : getBlogDetails
}