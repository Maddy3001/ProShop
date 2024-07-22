document.addEventListener('DOMContentLoaded', function () {
    showAmountFn();
})

function showAmountFn() {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
            renderAmt(JSON.parse(this.responseText));
        }
    });

    xhr.open("GET", "http://localhost:8080/showAmount");

    xhr.send();
}

function deleteProduct(req) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            showAmountFn()
        }
    });

    xhr.open("DELETE", `http://localhost:8080/deleteProduct/${req}`);

    xhr.send();
}