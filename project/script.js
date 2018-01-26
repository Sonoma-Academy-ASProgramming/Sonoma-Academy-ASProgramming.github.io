
if(annyang){
    document.write("Listening...");
    document.write("new");
var command = {
    'hello': helloFunction
};

var helloFunction = function (userName) {
    window.alert("Hi!");
};

annyang.addCommands(command);
annyang.start();
}
