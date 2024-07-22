function cardsRender(data) {
    var html = "";
    data.forEach(function (ele, index) {
        html += ` <div class="cards">
            <p class="ProductId">ProductId : ${index + 1}</p>
            <p class="ProductName">Product: ${ele.productName} ${ele.modelNo}</p>
            <p class="Amount"> Amount: ${ele.Amount}</p>
            <div>
            <label>Quantity</label>
            <input type="number" class="quantity"/>
            </div>
            <button class"addtoCart">Add to cart</button>
        </div>`
    })

    document.querySelector('.mainCardsSec').innerHTML = html;
    addtoClick()
}

function renderAmt(data) {
    var htmlval = ""
    var htmlVal2 = ""
    var htmlAmt = ""
    var totalAmount = 0;
    data.forEach(function (ele, index) {
        htmlval += `<li data-productId=${ele.productId}>
            ${ele.productName + ' ' + ele.modelNo}
            <button class="deleteBtn">Delete</button>
        </li>
        `
        htmlVal2 += `<li>${ele.quantity}</li>`
        htmlAmt += `<li>${ele['Final price']}</li>`
        totalAmount += ele['Final price']
    })
    document.querySelector('.productName ul').innerHTML = htmlval;
    document.querySelector('.productQuantity ul').innerHTML = htmlVal2;
    document.querySelector('.totalAmount ul').innerHTML = htmlAmt;
    document.querySelector('.totalAmt').innerText = `Total Amount : ${totalAmount}`
    deleteClickFn();

}

