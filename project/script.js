
if(annyang){
    document.write("Listening...");
    
var command = {
    'my name is *userName': helloFunction
};

var helloFunction = function (userName) {
    alert("Hello " + userName);
};

annyang.addCommands(command);
annyang.start();
}
