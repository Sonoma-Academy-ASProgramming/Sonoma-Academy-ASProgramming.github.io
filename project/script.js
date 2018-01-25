var command = {
    '*name' : helloFunction
};
var helloFunction = function (name){
    document.write('name');
};
annyang.init(command,true);
annyang.start();