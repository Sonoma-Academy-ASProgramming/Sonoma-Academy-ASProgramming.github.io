var date;
var blip = new Audio('blip.mp3');
var firstQuestion = true;
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
            'what the *a is for lunch (today)': function listLunch() {
                printLunch("");
            }, 'what the *a is the *b (today)': function listLunch(a, b) {
                printLunch(b);
            },

            'what(\'s) the *b (today)': function LISTLUNCH(b) {
                printLunch(b);
            },
            'what(\'s) for lunch (today)': function LISTLUNCH() {
                printLunch("");
            },
            'hi *a': function LISTLUNCH(a) {
                console.log(a);
                printLunch("")
            },
            'do a barrel roll': function barrelRoll() {
                doABarrelRoll();
            }
        };

        annyang.addCommands(command);
        annyang.start();
    }
}

function doABarrelRoll() {
    var body = document.getElementById("body");
    try{
        body.classList.remove("body-barrelRoll");
    }catch(e){

    }
    body.classList.add("body-barrelRoll");
}

function printLunch(a) {
    examplesDownSlide();
    blip.play();
    var date = new Date();
//    var response = document.getElementById("response");
//    var responseText = document.getElementById("responseText");
    getLunch(date.getFullYear(), date.getMonth() + 1, date.getDate(), function (data) {
        console.log(data);
        let res = "";

        if (a === "soup") {
            res = data[0];
        } else if (a === "entree") {
            res = data[2]
        } else if (a === "sides" || a === "size") {
            res = data[4]
            a = "sides";
        } else if (a === "dessert" || a === "desert") {
            res = data[5]
            a = "dessert";
        } else if (a === "salad") {
            res = data[1]
        } else if (a === "special diet entree") {
            res = data[3]
        } else {
            res = "<ul>";
            data.forEach(function (item) {
                res += "<li>" + item + "</li>"
            });
            res += "</ul>";
        }
        //var res = dataToPrint;
        var body = document.getElementById("body");
        try{
            body.removeChild(document.getElementById("lunchArticle"));
        }catch(w){
        }
        var lunchArticle = document.createElement("article");
        lunchArticle.setAttribute("id", "lunchArticle");
        lunchArticle.setAttribute("class","response");
        var lunchHeader = document.createElement("h1");
        lunchArticle.appendChild(lunchHeader);
        lunchHeader.innerHTML = "Today's " + a + ":";
        var lunchText = document.createElement("p");
        lunchArticle.appendChild(lunchText);
        lunchText.innerHTML = res;
        document.getElementById("body").appendChild(lunchArticle);

        //printData(res);
//        $("#title").html("Today's " + (a || "lunch") + ":");
//        //            callback([GetSoup(), GetSalad(), GetEntree(), GetSpecialDietEntree(), GetSides(), GetDessert()]);
//
//        responseText.innerHTML = res;
            });
}

function printData(dataToPrint){
    var res = dataToPrint;
    var body = document.getElementById("body");
//        try{
//            //body.removeChild(document.getElementById("lunchArticle"));
//        }catch(w){
//
//        }
        var lunchArticle = document.createElement("article");
        lunchArticle.setAttribute("tag", "lunchArticle");
        lunchArticle.setAttribute("class","response");
        var lunchHeader = document.createElement("h1");
        lunchArticle.appendChild(lunchHeader);
        lunchHeader.innerHTML = "Today's " + a + ":";
        var lunchText = document.createElement("p");
        lunchArticle.appendChild(lunchText);
        lunchText.innerHTML = res;
        document.getElementById("body").appendChild(lunchArticle);

}
//
// function day(increment) {
//     var date = new Date();
//     switch (date.getDay() + increment) {
//         case 0:
//             return "sunday";
//             break;
//         case 1:
//             return "monday";
//             break;
//         case 2:
//             return "tuesday";
//             break;
//         case 3:
//             return "wednesday";
//             break;
//         case 4:
//             return "thursday";
//             break;
//         case 5:
//             return "friday";
//             break;
//         case 6:
//             return "saturday";
//     }
// }

function examplesDownSlide() {
    try {
        var sampleQuestions = document.getElementById("sample-questions");
        sampleQuestions.classList.add("sample-questions-down");
        sampleQuestions.classList.remove("sample-questions");

    } catch (e) {

    }
    try {
//        var response = document.getElementById("response");
//        /*
//                response.classList.add("response-disabled");
//                response.classList.remove("response");
//                response.classList.remove("response-fadeoutin");*/
//        if (firstQuestion) {
//            response.classList.remove("response-disabled");
//            response.classList.add("response");
//            firstQuestion = false;
//        } else {
//            response.classList.remove("responseOutIn");
//            void response.offsetWidth;
//            response.classList.add("responseOutIn");
//            response.classList.remove("response");
    } catch (e) {
        console.log("ERROR: " + e)
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

function GetEntree() {
    return $("[day_no=" + date + "] div#sonomaacademy_lunch_entree span.item-value").text();
}

function GetSalad() {
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
