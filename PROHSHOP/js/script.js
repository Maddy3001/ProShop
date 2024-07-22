document.addEventListener('DOMContentLoaded', function () {
    getAlldata();

    document.querySelector('.viewCart').addEventListener('click',function(){
        window.location.href = "/PROHSHOP/cart.html"
    })
})

function addtoClick() {
    document.querySelectorAll('.mainCardsSec button').forEach(function (ele) {
        ele.addEventListener('click', function () {
            var quantiy = ""
            var reqObj = {}
            if (this.closest('.cards').querySelector('.quantity').value == "") {
                quantiy = "1"
            } else {
                quantiy = this.closest('.cards').querySelector('.quantity').value
            }
            reqObj = {
                "productId": this.closest('.cards').querySelector('.ProductId').innerText.split(':').pop().trim(),
                "quantity": quantiy
            }
            saveData(reqObj);

        })
    })
}

function deleteClickFn(){
    document.querySelectorAll('.deleteBtn').forEach(function(elem,index){
        elem.addEventListener('click',function(){
            var pId = this.closest('li').getAttribute('data-productid')
            deleteProduct(pId)
        })
    })
}