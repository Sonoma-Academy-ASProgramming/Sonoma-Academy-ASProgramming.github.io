var date;
var blip = new Audio('blip.mp3');
init();

/**
 * Initialize Voice Recognition
 */
function init() {
    /*  Quick check to make sure the annyang library is working correctly.
        This rarely matters for regular web browsers but on mobile it lets the user know that the mic won't work.*/
    if (annyang) {
        document.getElementById("mic-status").innerHTML = "Listening...";
        var command = {
            'background (color) *thisColor': function (thisColor) {
                document.getElementById("body").style.backgroundColor = thisColor;
            },
            'what\'s for lunch (today)': function listLunch() {
                blip.play();
                examplesDownSlide();
                printLunch();
            },
            'what the fuck is for lunch (today)': function LISTLUNCH() {
                blip.play();
                examplesDownSlide();
                printLunch();
            }
        };

        annyang.addCommands(command);
        annyang.start();
    }
}

function printLunch() {
    var date = new Date();
    var response = document.getElementById("response");
    var responseText = document.getElementById("responseText");
    return getLunch(date.getFullYear(), date.getMonth() + 1, date.getDate(), function (data) {
        responseText.innerHTML = data;
        response.classList.add("response");
        response.classList.remove("response-disabled");
    });
}

function day(increment) {
    var date = new Date();
    switch (date.getDay() + increment) {
        case 0:
            return "sunday";
            break;
        case 1:
            return "monday";
            break;
        case 2:
            return "tuesday";
            break;
        case 3:
            return "wednesday";
            break;
        case 4:
            return "thursday";
            break;
        case 5:
            return "friday";
            break;
        case 6:
            return "saturday";
    }
}

function examplesDownSlide() {
    try{
        var sampleQuestions = document.getElementById("sample-questions");
        sampleQuestions.classList.add("sample-questions-down");
        sampleQuestions.classList.remove("sample-questions");

    }catch(e){

    }
    try{
        var response = document.getElementById("response");
        response.classList.add("response-disabled");
        response.classList.remove("response");

    }catch(e){

    }
}

function getLunch(year, month, day, callback) {
    date = year.toString() + "-" + ((month < 10) ? "0" + month.toString() : month.toString()) + "-" + ((day < 10) ? "0" + day.toString() : day.toString());
    console.log("Date set to: " + date);

    var url = "https://query.yahooapis.com/v1/public/yql?q=select * from htmlstring where url='http://www.myschooldining.com/sa'&env=store://datatables.org/alltableswithkeys&format=json";

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            document.getElementById("data").innerHTML = JSON.parse(xmlHttp.responseText).query.results.result.toString();
            callback([GetSoup(), GetSalad(), GetEntree(), GetSpecialDietEntree(), GetSides(), GetDessert()]);
        }
    };
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
    console.log("Getting data...");
}

function GetSoup() {
    console.log("Using search string: " + "[day_no=" + date + "] div#sonomaacademy_lunch_soup span.item-value");
    return $("[day_no=" + date + "] div#sonomaacademy_lunch_soup span.item-value").text();
}

function GetSalad() {
    return $("[day_no=" + date + "] div#sonomaacademy_lunch_entree span.item-value").text();
}

function GetEntree() {
    return $("[day_no=" + date + "] div#sonomaacademy_lunch_salad span.item-value").text();
}

function GetSpecialDietEntree() {
    return $("[day_no=" + date + "] div#sonomaacademy_lunch_specialdietentree span.item-value").text();
}

function GetSides() {
    return $("[day_no=" + date + "] div#sonomaacademy_lunch_sides span.item-value").text();
}

function GetDessert() {
    return $("[day_no=" + date + "] div#sonomaacademy_lunch_dessert span.item-value").text();
}
