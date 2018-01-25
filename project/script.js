if(annyang){
    document.write("annyang working");
}    
var command = {
    'testing *name' : helloFunction
};
var helloFunction = function (name){
    document.write('name');
};
annyang.init(command,true);
annyang.add(command);
annyang.start();
