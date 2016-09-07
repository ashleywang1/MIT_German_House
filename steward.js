var mon = document.getElementById('id_meal_set-0-recipes');
var sunDinner = document.getElementById('id_meal_set-1-recipes');
var sunBrunch = document.getElementById('id_meal_set-2-recipes');
var thurs = document.getElementById('id_meal_set-3-recipes');
var tues = document.getElementById('id_meal_set-4-recipes');
var wed = document.getElementById('id_meal_set-5-recipes');

var meals = [mon,sunDinner,sunBrunch,thurs,tues,wed];

var monRcps = [581,643,153];
var sunDinnerRcps = [217,582,528];
var sunBrunchRcps = [555,638,626];
var thursRcps = [554,415,500];
var tuesRcps = [445,437,588];
var wedRcps = [86,277,649];

recipes = [monRcps,sunDinnerRcps,sunBrunchRcps,thursRcps,tuesRcps,wedRcps];

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

// This part takes care of the late plates
var mon = document.getElementById('id_meal_set-0-lateplates');
var sunDinner = document.getElementById('id_meal_set-1-lateplates');
var sunBrunch = document.getElementById('id_meal_set-2-lateplates');
var thurs = document.getElementById('id_meal_set-3-lateplates');
var tues = document.getElementById('id_meal_set-4-lateplates');
var wed = document.getElementById('id_meal_set-5-lateplates');
var latePlates = [mon,sunDinner,sunBrunch,thurs,tues,wed];

var sundayBrunchLatePlates = [];
var sundayLatePlates = ['eakinbo'];
var mondayLatePlates = ['ashwang'];
var tuesdayLatePlates = ['aburkart'];
var wednesdayLatePlates = [];
var thursdayLatePlates = [];

var latePlateRequests = [mondayLatePlates,sundayLatePlates,sundayBrunchLatePlates,thursdayLatePlates,tuesdayLatePlates,wednesdayLatePlates];


for (x = 0; x < latePlates.length; x++) {
	var latePlate = latePlates[x];
	var equests = latePlateRequests[x];
	byVal = [],i

	var inputs = latePlate.getElementsByTagName("option");
	for (i = 0; i < inputs.length; i++) {
	    if (lp[x].indexOf(parseInt(inputs[i].value)) != -1) {
	        inputs[i].selected = true;
	    } else {
	    	inputs[i].selected = false;
	    }
	}
}

