/*
Quick check to make sure the annyang library is working correctly. This rarely matters for regular web browsers but on mobile it lets the user know that the mic won't work.
*/
if (annyang){
    document.getElementById("mic-status").innerHTML = "Listening...";
var command = {
    'background (color) *thisColor':function(thisColor){
        document.getElementById("body").style.backgroundColor = thisColor;
    },
    'get lunch':function listLunch() {
        examplesDownSlide();
        document.getElementById("response").innerHTML = printLunch();
    }
};

annyang.addCommands(command);
annyang.start();
}
