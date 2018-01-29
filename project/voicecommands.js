function printLunch() {
    var date = new Date();
    //console.log(date.getFullYear() + " " + (date.getMonth() + 1) + " " + date.getDate());
    return getLunch(date.getFullYear(), date.getMonth() + 1, date.getDate());

}
console.log(getLunch(new Date().getFullYear), new Date().getMonth(), new Date.getDate());
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
    var sampleQuestions = document.getElementsByClassName("sample-questions");
    sampleQuestions[0].classList.add("sample-questions-down");
    sampleQuestions[0].classList.remove("sample-questions");
}
