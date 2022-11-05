//json web server for zuri stage2

const http = require("http");
const { type } = require("os");
var url = require('url');

const server = http.createServer(function(req, res){
    res.setHeader("Content-type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);

    var sample = url.parse(req.url, true).query;
    var operation = sample.operation-type;
    var num1 = sample.x;
    var num2 = sample.y;

    if (sample.operation_type == 'addition'){
        var operation = "addition";
        var result = num1+num2;    
    }else if (sample.operation_type == 'subtraction'){
        var operation = "subtraction";
        var result = num1-num2;
    }else if (sample.operation_type == 'multiplication'){
        var operation = "multiplication";
        var result = num1*num2
    }else{
        var operation = "wronginpu";
        var result = "wronginput"
    }

    let dataObj = {
        "slackUsername":"cchimdindu", 
        "operation-type":operation,
        "result":result,
    };

    let data = JSON.stringify(dataObj);
    res.end(data);
});

server.listen(process.env.PORT||1200, function(){
    console.log("worked");
});