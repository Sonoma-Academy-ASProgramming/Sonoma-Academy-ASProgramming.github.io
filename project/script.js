if (annyang){
    document.write("Listening...");

var command = {
    'background (color) *thisColor':function(thisColor){
        document.getElementById("body").style.backgroundColor = thisColor;
    }
};

annyang.addCommands(command);
annyang.start();
}
