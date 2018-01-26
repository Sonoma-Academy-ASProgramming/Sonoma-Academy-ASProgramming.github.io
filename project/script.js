
if(annyang){
    document.write("Listening...");
    document.write("new");
var command = {
    'hello *userName': helloFunction
};

var helloFunction = function (userName) {
    window.alert("Hello " + userName);
};

annyang.addCommands(command);
annyang.start();
}
