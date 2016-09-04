var mon = document.getElementById('id_meal_set-0-recipes');
var sunDinner = document.getElementById('id_meal_set-1-recipes');
var sunBrunch = document.getElementById('id_meal_set-2-recipes');
var thurs = document.getElementById('id_meal_set-3-recipes');
var tues = document.getElementById('id_meal_set-4-recipes');
var wed = document.getElementById('id_meal_set-5-recipes');

meals = [mon,sunDinner,sunBrunch,thurs,tues,wed];

var mon = [581,643,153];
var sunDinner = [217,582,528];
var sunBrunch = [555,638,626];
var thurs = [554,415,500];
var tues = [445,437,588];
var wed = [86,277,649];

recipes = [mon,sunDinner,sunBrunch,thurs,tues,wed];

for (x = 0; x < meals.length; x++) {
	meal = meals[x];
	byVal = [],i
	// console.log(meal);

	var inputs = meal.getElementsByTagName("option");
	for (i = 0; i < inputs.length; i++) {
	    if (recipes[x].indexOf(parseInt(inputs[i].value)) != -1) {
	        inputs[i].selected = true;
	    } else {
	    	inputs[i].selected = false;
	    }
	}
}

for (x = 0; x < meals.length; x++) {
	console.log(meals[x].selectedOptions);
}