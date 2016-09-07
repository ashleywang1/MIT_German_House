
var sundayBrunchLatePlates = [];
var sundayLatePlates = ['Ayo'];
var mondayLatePlates = ['Ashley'];
var tuesdayLatePlates = ['Mae'];
var wednesdayLatePlates = [];
var thursdayLatePlates = [];
var lp;

var date = new Date();

switch(date.getDay()) {
    case 0: //Sunday Brunch and Dinner
        lp = sundayBrunchLatePlates;
        // add late plates
        lp = sundayLatePlates;
        // add late plates again
        break;
    case 1:
        lp = mondayLatePlates;
        break;
    case 2:
        lp = tuesdayLatePlates;
        break;
    case 3:
        lp = wednesdayLatePlates;
        break;
    case 4:
        lp = thursdayLatePlates;
        break;
    default:
        //done
        break;
}

var users = document.getElementsByName("Add");
for (i = 0; i < users.length; i++) {
    if (lp.indexOf(users[i].value) != -1) {
        users[i].click();
    }
}