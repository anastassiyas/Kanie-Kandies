// calculate the cost of the order
calcOrder();
	
// event handlers for the web form
	orderForm.elements.products.onchange = calcOrder;
	orderForm.elements.qty.onchange = calcOrder;
	var planOptions = document.querySelectorAll('input[name="protection"]');
	for (var i = 0; i < planOptions.length; i++) {
		planOptions[i].onclick = calcOrder;
	}

function calcOrder() {
    var orderForm = document.forms.orderForm;	
    //Calculate initial cost of the order	
    var pIndex = orderForm.elements.products.selectedIndex;	
    var pCost = orderForm.elements.products.options[pIndex].value;
    var qIndex = orderForm.elements.qty.selectedIndex;	
    var quantity = orderForm.elements.qty[qIndex].value;	
  
    //Initial cost = product cost x quantity
    
    var initialCost = (pCost)*quantity;
    orderForm.elements.initialCost.value = formatUSCurrency(initialCost);
   
//     //Retrive the cost of the User`s protection plan	
// var pCost = document.querySelector(`input [name="protection"]:checked`).value * quantity;	
// orderForm.elements.protectionCost.value = formatNumber(pCost,2);	

//Calculate the order subtotal	
orderForm.elements.subtotal.value = formatNumber(initialCost,2);	


//Calculate the sales tax	//Calculate the sales tax
var salesTax  = 0.05*(initialCost);
orderForm.elements.salesTax.value = formatNumber(salesTax,2);

//Calculate the cost of the total order 
var totalCost = initialCost + salesTax;
orderForm.elements.totalCost.value = formatUSCurrency(totalCost);	
}
// // store the order details
// orderForm.elements.products.value = orderForm.elements.products.options[pIndex].text;
// orderForm.elements.protectionName.value = document.querySelector('input[name="protection"]:checked').nextSibling.nodeValue;


function formatNumber(val, decimals) {
return val.toLocaleString(undefined, 
    {minimumFractionDigits: decimals, 
    maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
return val.toLocaleString('en-US', {style: "currency", currency: "USD"});
}



    
    