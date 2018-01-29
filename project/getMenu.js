function getMenu() {
    var url = "http://query.yahooapis.com/v1/public/yql?q=select * from htmlstring where url='http://www.myschooldining.com/sa'&env=store://datatables.org/alltableswithkeys&format=json";

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            return JSON.parse(xmlHttp.responseText).query.results.result.toString();
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
