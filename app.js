const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/", (req, res) => {
  console.log(req.body);
  let { operation_type, x, y } = req.body;

  const myArray = operation_type.split(" ");

  const addition = ["add","top up","positive","join","plus","combine","+","sum","addition",];
  const subtraction = ["minus","negative","smaller","less","remove","subtract","-","deficient","subtraction",];
  const multiplication = ["times", "*", "multiply", "multiplication"];

  let lenadd = addition.length;
  let lensub = subtraction.length;
  let lenmul = multiplication.length;
  let lenarr = myArray.length;

  for(var j=0;j<lenarr;j++){
    for(var a=0;a<lenadd;a++){
      if(myArray[j]==addition[a]){
          operation_type == myArray[j];
      }
    }
  }

  for(var i=0;i<lenarr;i++){
    for(var b=0;b<lensub;b++){
      if(myArray[i]==subtraction[b]){
          operation_type == myArray[i];
      }
    }
  }

  for(var k=0;k<lenarr;k++){
    for(var c=0;c<lenmul;c++){
      if(myArray[k]==multiplication[c]){
          operation_type == myArray[k];
      }
    }
  }

  
  let result;
  const calculate = new Calculator(x, y);

  if (addition.indexOf(operation_type) > -1) {
    result = calculate.add;
    operation_type = "addition";
  }
  if (subtraction.indexOf(operation_type) > -1) {
    result = calculate.subtract;
    operation_type = "subtraction";
  }
  if (multiplication.indexOf(operation_type) > -1) {
    result = calculate.multiply;
    operation_type = "multiplication";
  }

  res.status(200).json({
    slackUsername: "cchimdindu",
    operation_type: operation_type,
    result: Number(result),
  });
});
class Calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  get add() {
    return this.addition();
  }
  get subtract() {
    return this.subtraction();
  }
  get multiply() {
    return this.multiplication();
  }
  addition() {
    return this.toDecimal(this.x + this.y);
  }
  subtraction() {
    return this.toDecimal(this.x - this.y);
  }
  multiplication() {
    return Number(this.toDecimal(this.x * this.y));
  }
  toDecimal(value) {
    return value.toFixed(2);
  }
}

app.listen(process.env.PORT ||1234, function(){
    console.log("listening on port 1234");
});
