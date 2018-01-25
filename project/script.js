
if(annyang){
    alert("ANNDR");
}    
var command = {
    'hello': helloFunction
};

var helloFunction = function () {
    alert("Hi");
};

annyang.addCommands(command);
annyang.start();
