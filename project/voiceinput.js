if (annyang){
    document.getElementById("mic-status").innerHTML = "Listening...";
var command = {
    'background (color) *thisColor':function(thisColor){
        document.getElementById("body").style.backgroundColor = thisColor;
    },
    'what day is it (today)':function tellDay(){
        document.getElementById("response").innerHTML = day(0);
    }
};

annyang.addCommands(command);
annyang.start();
}
