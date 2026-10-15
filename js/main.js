function clculatePrice(){
    var product =document.getElementById('product').value;
    var quantity =document.getElementById('quantity').value
    var discount =document.getElementById('discount').value
    var result =document.getElementById('result')
    result.setAttribute('class','color alert theme-danger mt-5')
    if(product==""){
        result.innerHTML='please select product'
    }
    else if(quantity==""){
        result.innerHTML='please enter quantity'
    }else if(discount==''){
         result.innerHTML='please enter discount'
        }else if(isNaN(quantity)){
        result.innerHTML='please enter a valide quantity'   
    }else if(isNaN(discount)){
 result.innerHTML='please enter a valide discount'  
}else if(discount<0 || discount>100){
        result.innerHTML='discount must be between 0 and 100'  
    }else{
        var subtotal = product * quantity;
        var discountAmount =(subtotal * discount) / 100 
        var total =subtotal - discountAmount
        result.setAttribute('class',' color2 alert theme-success my-5')
     result.innerHTML = `total is ${total} and discountAmount ${discountAmount} and subotal ${subtotal}`;
    }

}