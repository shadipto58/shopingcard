
function updateProductInput(product,isAdd,price){

    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    
    if(isAdd){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    
    const updateTotal = document.getElementById(product + "-total");
    updateTotal.innerText = productNumber * price;
    calculation();
}

function commonProduct(product){
    const productInput = document.getElementById(product + "-number");
    const productQuantity = parseInt(productInput.value);
    return productQuantity;
}

function calculation(){
    const phoneAmmount = commonProduct('phone') * 1219;
    const caseAmmount = commonProduct('case') * 59;
    const subTotal = phoneAmmount + caseAmmount;   
    const tax = subTotal/10;
    const grandTotal = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-ammount').innerText = tax;
    document.getElementById('total-price').innerText = grandTotal;

}





 
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductInput('phone',true,1219);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductInput('phone',false,1219);
});
document.getElementById('case-plus').addEventListener('click', function(){
    console.log('button clicked');
    updateProductInput('case',true,59);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductInput('case',false,59);
});