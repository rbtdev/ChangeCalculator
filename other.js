
var $ = function (id) {

    return document.getElementById(id);

}

 

var calculate_click = function ()

{

    var cents = $("cents").value;

 

    if ($("cents").value > 24){

        var quarters = Math.floor(cents/25);

        cents = cents%.25;

        $("quarters").value = quarters }

 

    if ($("cents").value > 9){

        var dimes = Math.floor(cents/10);

        cents = cents%.10;

        $("dimes").value = dimes}

 

    if ($("cents").value > 4){

        var nickels = Math.floor(cents/5);

        cents = cents%.05;

        $("nickels").value = nickels}

 

    if ($("cents").value > 0) {

        var pennies = Math.floor(cents);

         

        $("pennies").value = pennies}

         

}

window.onload = function () {

    $("calculate").onclick = calculate_click;

}


I would also leave out the if statements. Something like this would work:

view sourceprint?
01
var cents = $("cents").value;
02
var quarters = 0;
03
var dimes = 0;
04
var nickels = 0;
05
var pennies = 0;
06
 
07
quarters = cents % 25;
08
cents = cents - (quarters * 25);
09
 
10
dimes = cents % 10;
11
cents = cents - (dimes * 10);
12
 


 function makeChange(amount)
{ this['dollars'] = Math.floor(amount);
amount = amount%1;
this['quarters'] = Math.floor(amount/0.25);
amount = amount%0.25;
this['dimes'] = Math.floor(amount/0.1);
amount = amount%0.1;
this['nickels'] = Math.floor(amount/0.05);
amount = (amount%0.05)*100;
this['pennies'] = Math.floor(amount);
return;
}

