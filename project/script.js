
if(annyang){
    alert("ANNDR");
}    
var command = {
    'hello': helloFunction
};

var helloFunction = function () {
    alert("Hi");
};

annyang.init(command, true);
annyang.start();
