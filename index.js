



/* Grey background text in input boxes */
function inputFocus(i){
    if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
}
function inputBlur(i){
    if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
}
	
/* Round to decimal point */
function roundToDecimal(num,dec) {
      var rounded = (Math.round(num * Math.pow(10,dec)) / Math.pow(10,dec)).toFixed(dec);
      return rounded;
	  	  	  
    }


 /*Bind a function to the click event */
    var button = document.getElementById('calculateChange');

		
/* Field and Button setup */

    button.onclick = function() {
        
        /* Cost of Purchase */
        var costOfPurchase = document.getElementById('costOfPurchase');

        var cost = costOfPurchase.value;

        /* Amount given by customer */
		var amountTendered = document.getElementById('amountTendered');

        var amount = amountTendered.value;

        
/* Initial Change Calculation */

		var change = amount - cost;


/*var calculateChange = document.getElementById('calculateChange'); */



/* Calculations to divide change into Dollars, Quarters, Nickels, Dimes, Pennies */

	

 /* Assign the message to the output element we just fetched from the DOM */
        
		document.getElementById('calculateChange');
		
		       
		
		
    }


