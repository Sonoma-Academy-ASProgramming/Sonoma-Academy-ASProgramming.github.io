
if(annyang){
    document.write("Listening...");
}    
var command = {
    'my name is *userName': helloFunction
};

var helloFunction = function () {
    alert("Hello " + userName);
};

annyang.addCommand(command);
annyang.start();
