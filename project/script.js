
if(annyang){
    document.write("Listening...");
var command = {
    'hello': helloFunction
};

var helloFunction = function (userName) {
    alert("Hi!");
};

annyang.addCommands(command);
annyang.start();
}
