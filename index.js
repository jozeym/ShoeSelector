function myFunction() {
	//Get value of select "shoetype"
	let shoetype = document.getElementById("shoetype").value;
	document.getElementById("type").innerHTML = shoetype;

	//Get value of select "shoecolor"
	let shoecolor = document.getElementById("shoecolor").value;
	//Must be these colours else show an error
	if (shoecolor == "Red" || shoecolor == "Yellow" || shoecolor == "Pink" || shoecolor == "Green" || shoecolor == "Black") {
		document.getElementById("color").innerHTML = shoecolor;
	} else {
		document.getElementById("color").innerHTML = "Invalid shoe color.";
	}

	// Get the value of the input field with id="cmd"
	let cms = parseInt(document.getElementById("cms").value);
	let cmstype = typeof cms;
	price = 0;
	//document.getElementById("size").innerHTML = "type is: " + cmstype + " value is: " + cms;
	//check the size based on the foot length input and output the size of the shoe
	if (cms > 22.2 && cms < 22.9) {
		document.getElementById("size").innerHTML = "Size is: 36";
	} else if (cms > 23 && cms < 23.7) {
		document.getElementById("size").innerHTML = "Size is: 37";
	} else if (cms > 23.8 && cms < 24.5) {
		document.getElementById("size").innerHTML = "Size is: 38";
	} else if (cms > 24.6 && cms < 25.3) {
		document.getElementById("size").innerHTML = "Size is: 39";
	} else if (cms > 25.4 && cms < 26.1) {
		document.getElementById("size").innerHTML = "Size is: 40";
	}
	
	//if valid colour, show the price of the shoe per shoe type
	if (shoecolor == "Red" || shoecolor == "Yellow" || shoecolor == "Pink" || shoecolor == "Green") {
		if (shoetype == "Sandal") {
			price = "$75";
		} else if (shoetype == "Sport shoe") {
			price = "$200";
		} else if (shoetype == "Boot") {
			price = "$220";
		} else if (shoetype == "High Heel") {
			price = "$125";
		}
	//black shoes are more expensive
	} else if (shoecolor == "Black") {
		if (shoetype == "Sandal") {
			price = "$75";
		} else if (shoetype == "Sport shoe") {
			price = "$200";
		} else if (shoetype == "Boot") {
			price = "$220";
		} else if (shoetype == "High Heel") {
			price = "$125";
		}
	}
	document.getElementById("price").innerHTML = price;
}	

