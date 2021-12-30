let checkElligibility = function() {

	let name = document.getElementById("name").value ;

 	let age = parseInt(document.getElementById("age").value) ;

	if (age < 18) {
	    alert(name + " is not eligible for voting!")
	}

	else{
		alert(name + " is  eligible for voting!")
    }
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}