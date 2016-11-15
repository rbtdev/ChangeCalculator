



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
        
		var change = roundToDecimal(amount - cost, 2);
		/* console.log(change); */
		 document.getElementById('totalOutput').innerHTML = 'Your Change Is: $' + (change);
		console.log(change);
		


/*var calculateChange = document.getElementById('calculateChange'); */


/* DOLLARS WHOLE VALUE*/
document.getElementById('dollars').innerHTML = 'Dollars: $' + Math.floor(change);

var dollars = Math.floor(change);
console.log(dollars);

/* Quarters Calculations */

var quarters = (Math.floor((change - dollars) / .25));
console.log(quarters);
document.getElementById('quarters').innerHTML = 'Quarters: ' + quarters;

/* Dime Calculations */




/*Whole value - Rounded Value  
var wholeChangeValue = (change - Math.floor(change) );
console.log(wholeChangeValue);

var quarters = (Math.round(wholeChangeValue / .25));
console.log(quarters);

document.getElementById('quarters').innerHTML = 'Quarters: ' + quarters;

console.log (wholeChangeValue); */







var dimes = "";
var nickels = "";
var pennies = "";



	

 /* Assign the message to the output element we just fetched from the DOM */
        
		document.getElementById('calculateChange');
		
		       
		
		
    }


