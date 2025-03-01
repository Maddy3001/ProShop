const sql = require('mysql2');

const sqlConfig = sql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    insecureAuth: true,
    database: "products",
});

function connectionServer() {
    sqlConfig.connect(function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log('connection established', result)
        }
    })
};

function showData(req, resp) {
    connectionServer()
    console.log(req, "reqqqqqqqq")
    sqlConfig.query(`select * from productdetails`, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            resp(response);
        }
    })
};

function showAllData(req, resp) {
    const page = parseInt(req.page) || 1;
    const pageSize = parseInt(req.pageSize) || 12;
    const offset = (page - 1) * pageSize;

    sqlConfig.query(`SELECT * FROM productdetails LIMIT ${pageSize} OFFSET ${offset}`, function (error, response) {
        if (error) {
            console.log(error);
            resp([]);
        } else {
            resp(response);
        }
    });
};


function saveData(req, resp) {
    connectionServer()
    sqlConfig.query(`
        INSERT INTO saveproduct (productid, quantity)
        VALUES (${req.productId}, ${req.quantity})
        ON DUPLICATE KEY UPDATE
        quantity = quantity + VALUES(quantity)
    `, function (err, response) {
        if (err) {
            console.log(err);
        } else {
            resp(response);
        }
    });
};

function calcAmount(req, resp) {
    connectionServer();
    sqlConfig.query(`select p.productId,p.productName,c.quantity,(p.amount*c.quantity) "Final price" from productdetails p inner join saveproduct c on c.productid = p.productId;`, function (error, response) {
        if (error) {
            console.log(error)
        } else {
            resp(response)
        }
    })
}

function searchData(req, resp) {
    connectionServer();
    sqlConfig.query(`select * from productdetails where productName like '%${req.params.pname}%'`, function (error, response) {
        if (error) {
            console.log(error, 'error to search data');
        } else {
            resp(response);
        }
    })
}

function deleteProduct(req, resp) {
    connectionServer();
    sqlConfig.query(`delete from saveproduct where productId=${req}`, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            resp(response);
        }
    })
}

function sortData(req, resp) {
    connectionServer();
    console.log(req, "sdfghgfdsasdfg");
    console.log(req.modelNo, "modeNo")
    if (req.modelNo) {
        sqlConfig.query(`select * from productdetails where modelNo=${Number(req.modelNo)}`, function (err, responses) {
            if (err) {
                console.log(err);
            } else {
                resp(responses);
            }
        })
    }
    else if (req.productName) {
        sqlConfig.query(`select * from productdetails where productName=${req.productName}`, function (err, response) {
            if (err) {
                console.log(err);
            } else {
                resp(response);
            }
        })
    }
}


module.exports = {
    showData: showData,
    showAllData: showAllData,
    saveData: saveData,
    calcAmount: calcAmount,
    deleteProduct: deleteProduct,
    sortData: sortData,
    searchData: searchData
}