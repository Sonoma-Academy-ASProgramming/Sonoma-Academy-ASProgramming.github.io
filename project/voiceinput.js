if (annyang){
    document.getElementById("mic-status").innerHTML = "Listening...";
var command = {
    'background (color) *thisColor':function(thisColor){
        document.getElementById("body").style.backgroundColor = thisColor;
    },
    'print lunch':function listLunch() {
        examplesDownSlide();
        document.getElementById("response").innerHTML = day(0);
    }
};

annyang.addCommands(command);
annyang.start();
}
