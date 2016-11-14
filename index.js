



/* Grey background text in input boxes */
function inputFocus(i){
    if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
}
function inputBlur(i){
    if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
}
	

    //2. Bind a function to the click event
    var button = document.getElementById('calculateWeight');

		
	
    button.onclick = function() {
        var inputWeight = document.getElementById('inputWeight');

        var weight = inputWeight.value;

        var selectElement = document.getElementById('selectPlanet');

        
var selectedIndex = selectElement.selectedIndex;

        var selectedOption = selectElement.options[selectedIndex];

        var planetName = selectedOption.text;
        var planetValue = selectedOption.value;


		
						

	

	
	
        
		var output = document.getElementById('output');
	

        // Assign the message to the output element we just fetched from the DOM
        output.innerHTML = message;
		document.getElementById('calculateChange');
		
		

        
		
		
    }


}