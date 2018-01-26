
if(annyang){
    document.write("Listening...");
    
var helloFunction = function (userName) {
    alert("Hi!");
};
    
var command = {
    'hello *userName': function(userName){
        document.getElementById("result").innerHTML = ("Hello " + userName);    
    }
};

annyang.addCommands(command);
annyang.start();
}
