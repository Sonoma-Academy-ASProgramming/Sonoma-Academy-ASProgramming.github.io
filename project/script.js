
if(annyang){
    document.write("Listening...");
    
var helloFunction = function (userName) {
    alert("Hi!");
};
    
var command = {
    'hello': helloFunction
};

annyang.addCommands(command);
annyang.start();
}
