function getAlldata() {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var jsonRes = JSON.parse(this.responseText);
            console.log(jsonRes)
            cardsRender(jsonRes);
        }
    });
    xhr.open("GET", "http://localhost:8080/getproductDetails");

    xhr.send();
}

function saveData(reqObj) {
    var data = JSON.stringify(reqObj);

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://localhost:8080/saveData");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
}