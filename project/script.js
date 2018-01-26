
if(annyang){
    document.write("Listening...");
    
var helloFunction = function (userName) {
    alert("Hi!");
};
    
var command = {
    'hello *userName': helloFunction(userName){
        alert("Hello" + userName);    
    }
};

annyang.addCommands(command);
annyang.start();
}
