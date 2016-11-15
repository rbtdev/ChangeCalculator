

function makeChange(amount) {

	var cents = amount*100;
	var change = {};

	change.total = amount;
	change.dollars = Math.floor(cents/100);
	cents -= change.dollars*100;
	change.quarters = Math.floor(cents/25)
	cents -= change.quarters*25;
	change.dimes =  Math.floor(cents/10)
	cents -= change.dimes*10;
	change.nickels = Math.floor(cents/5)
	cents -= change.nickels*5;
	change.pennies = Math.floor(cents);
	console.log("Change amount = " + amount);
	console.log("Change = " + JSON.stringify(change));
	return change;
}

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

	var change = makeChange(roundToDecimal(amount - cost, 2));
	/* console.log(change); */

	document.getElementById('totalOutput').innerHTML = 'Your Change Is: $' + (change.total);
	console.log(change.dollars);



	document.getElementById('dollars').innerHTML = 'Dollars: $' + change.dollars;
	document.getElementById('quarters').innerHTML = 'Quarters: ' + change.quarters;
	document.getElementById('dimes').innerHTML = 'Dimes: ' + change.dimes;
	document.getElementById('nickels').innerHTML = 'Nickles: ' + change.nickels;
	document.getElementById('pennies').innerHTML = 'Pennies: ' + change.pennies;


}


