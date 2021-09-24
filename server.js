const anka = require("http"); //Gets http things from node.js

const port = 8089;
//const hostname = localhost;

const coolServer = anka.createServer((helloResquest, byeRespond) => { //Creates server function???
    byeRespond.setHeader('Content-type', 'text/html'); 
    byeRespond.end('<h1>Hello world! This message is sponsored by Östra Gymnasiet</h1><br><h2>My name is Ludvig and I\'m very cool innit</h2>')
    
});
console.log("Server up and running, its alive!")
coolServer.listen(8089);