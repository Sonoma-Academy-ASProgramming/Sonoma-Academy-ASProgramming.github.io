let date;

function getLunch(year, month, day) {
    date = year.toString() + "-" + ((month < 10) ? "0" + month.toString() : month.toString()) + "-" + ((day < 10) ? "0" + day.toString() : day.toString());
    console.log("date set to: " + date);

    var url = "http://query.yahooapis.com/v1/public/yql?q=select * from htmlstring where url='http://www.myschooldining.com/sa'&env=store://datatables.org/alltableswithkeys&format=json";

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            document.getElementById("data").innerHTML = JSON.parse(xmlHttp.responseText).query.results.result.toString();
        return [GetSoup(), GetSalad(), GetEntree(), GetSpecialDietEntree(), GetSides(), GetDessert()];
    };
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
    console.log("Getting data...");
}


function GetSoup() {
    // console.log("Using search string: " + "[day_no=" + date + "] div#sonomaacademy_lunch_soup span.item-value");
    return ($("[day_no=" + date + "] div#sonomaacademy_lunch_soup span.item-value").text()).trim();
}

function GetSalad() {
    return ($("[day_no=" + date + "] div#sonomaacademy_lunch_entree span.item-value").text()).trim();
}

function GetEntree() {
    return ($("[day_no=" + date + "] div#sonomaacademy_lunch_salad span.item-value").text()).trim();
}

function GetSpecialDietEntree() {
    return ($("[day_no=" + date + "] div#sonomaacademy_lunch_specialdietentree span.item-value").text()).trim();
}

function GetSides() {
    return ($("[day_no=" + date + "] div#sonomaacademy_lunch_sides span.item-value").text()).trim();
}

function GetDessert() {
    return ($("[day_no=" + date + "] div#sonomaacademy_lunch_dessert span.item-value").text()).trim();
}
