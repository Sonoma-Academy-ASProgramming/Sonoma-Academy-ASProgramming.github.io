  let a;

    class GetMenu {
        constructor() {
            this.date = "";
            console.log("Getting data...");
            // $.get("http://www.myschooldining.com/sa", function (data, status) {
            $.get("./LunchMenu.html", function (data, status) {
                if (status === "success") {
                    document.getElementById("data").innerHTML = data;

                } else {
                    alert("Error: " + status);
                }
            });
        }
    }

    function createCORSRequest(method, url) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {

            // Check if the XMLHttpRequest object has a "withCredentials" property.
            // "withCredentials" only exists on XMLHTTPRequest2 objects.
            xhr.open(method, url, true);

        } else if (typeof XDomainRequest != "undefined") {

            // Otherwise, check if XDomainRequest.
            // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
            xhr = new XDomainRequest();
            xhr.open(method, url);

        } else {

            // Otherwise, CORS is not supported by the browser.
            xhr = null;

        }
        return xhr;
    }


    GetMenu.prototype.GetSoup = function () {
        // console.log("Using search string: " + "[day_no=" + this.date + "] div#sonomaacademy_lunch_soup span.item-value");
        return ($("[day_no=" + this.date + "] div#sonomaacademy_lunch_soup span.item-value").text()).trim();
    };
    GetMenu.prototype.GetEntree = function () {
        return ($("[day_no=" + this.date + "] div#sonomaacademy_lunch_entree span.item-value").text()).trim();
    };
    GetMenu.prototype.GetSalad = function () {
        return ($("[day_no=" + this.date + "] div#sonomaacademy_lunch_salad span.item-value").text()).trim();
    };
    GetMenu.prototype.GetSpecialDietEntree = function () {
        return ($("[day_no=" + this.date + "] div#sonomaacademy_lunch_specialdietentree span.item-value").text()).trim();
    };
    GetMenu.prototype.GetSides = function () {
        return ($("[day_no=" + this.date + "] div#sonomaacademy_lunch_sides span.item-value").text()).trim();
    };
    GetMenu.prototype.GetDessert = function () {
        return ($("[day_no=" + this.date + "] div#sonomaacademy_lunch_dessert span.item-value").text()).trim();
    };
    GetMenu.prototype.GetLunch = function () {
        return [this.GetSoup(), this.GetSalad(), this.GetEntree(), this.GetSpecialDietEntree(), this.GetSides(), this.GetDessert()]
    };
    GetMenu.prototype.setDate = function (year, month, day) {
        this.date = year.toString() + "-" + ((month < 10) ? "0" + month.toString() : month.toString()) + "-" + ((day < 10) ? "0" + day.toString() : day.toString());
        console.log("Date set to: " + this.date);
        return "Date set to: " + this.date;
    };

    $(document).ready(function () {
        $("#btnGetData").click(function () {
            try {
                a = new GetMenu();
                $("#1").attr("style", "transition-duration: 1s;opacity: 1;");
            } catch (e) {
            }

        });
        $("#btnSetDate").click(function () {
            $("#2").text(a.setDate($("#iptYear").val(), $("#iptMonth").val(), $("#iptDay").val()));
            $("#2").attr("style", "transition-duration: 1s;opacity: 1;");
        })
        $("#btnGetLunch").click(function () {
            // alert(a.GetLunch());
            let ans = a.GetLunch();
            console.log(ans);
            let ansHTMLformat = "";
            ans.forEach(function (item) {
                ansHTMLformat += item + "<br/>";
            })
            $("#ans").html(ansHTMLformat);
            $("#3").attr("style", "transition-duration: 1s;opacity: 1;");
        })
        //Get soup from date
    });
