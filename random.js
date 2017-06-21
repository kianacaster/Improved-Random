function random(param1, param2){
	var min, max; // Define minimum value and maximum value
	if(param2 == undefined && param1 == undefined){ // If there are no parameters
		return Math.random(); // Return random number between 0 and 1
	}else if(param2 == undefined && typeof param1 == "number"){ // If there is only one parameter
		return Math.random() * param1; // Return a random number between 0 and the parameter value
	}else{
		min = param1; // Minimum value is the first parameter
		max = param2; // Maximum value is the second parameter
		return Math.random() * (max - min) + min; // Return a random value between min and max
	}
}
