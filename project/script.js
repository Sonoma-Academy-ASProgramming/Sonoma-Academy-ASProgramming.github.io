
if(annyang){
    document.write("Listening");
var command = {
    'hello': helloFunction
};

var helloFunction = function (userName) {
    window.alert("Hi!");
};

annyang.addCommands(command);
annyang.start();
}
