//json web server for zuri stage1

const http = require("http");

const server = http.createServer(function(req, res){
    res.setHeader("Content-type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);

    let dataObj = {"slackUsername":"cchimdindu", "backend":true,"age":22,"bio":"i am junior software developer currently taking part in zuri\'s HNG9 program"};
    let data = JSON.stringify(dataObj);
    res.end(data);
});

server.listen(1234, function(){
    console.log("listening on port 1234");
});