const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/", (req, res) => {
  console.log(req.body);
  let { operation_type, x, y } = req.body;

  //const tired = JSON.stringify(req.body.operation_type);
  const myArray = req.body.operation_type.split(" ");

  const addition = ["add","top up","positive","join","plus","combine","+","sum","addition",];
  const subtraction = ["minus","negative","smaller","less","remove","subtract","-","deficient","subtraction",];
  const multiplication = ["times", "*", "multiply", "multiplication"];


  
  let result;
  const calculate = new Calculator(x, y);
  const really = new value(operation_type,addition,subtraction,multiplication,myArray);

  if (addition.indexOf(really) > -1) {
    result = calculate.add;
    operation_type = "addition";
  }
  if (subtraction.indexOf(really) > -1) {
    result = calculate.subtract;
    operation_type = "subtraction";
  }
  if (multiplication.indexOf(really) > -1) {
    result = calculate.multiply;
    operation_type = "multiplication";
  }

  res.status(200).json({
    slackUsername: "cchimdindu",
    operation_type: really,
    result: Number(result),
  });
});

class value{
  constructor(val,arr1,arr2,arr3,arr4){
  this.val = val;
  this.addition = arr1;
  this.subtraction = arr2;
  this.multiplication = arr3;
  this.myArray = arr4;
}
get val(){
  return this.calvalue;
}

calvalue(){
  let lenadd = this.addition.length;
  let lensub = this.subtraction.length;
  let lenmul = this.multiplication.length;
  let lenarr = this.myArray.length;

  for(var j=0;j<lenarr;j++){
    for(var a=0;a<lenadd;a++){
      if(this.myArray[j]==this.addition[a]){
          this.val == this.myArray[j];
      }
    }
  }

  for(var i=0;i<lenarr;i++){
    for(var b=0;b<lensub;b++){
      if(this.myArray[i]==this.subtraction[b]){
          this.val == this.myArray[i];
      }
    }
  }

  for(var k=0;k<lenarr;k++){
    for(var c=0;c<lenmul;c++){
      if(this.myArray[k]==this.multiplication[c]){
          this.val == this.myArray[k];
      }
    }
  }
  return this.value
  }
}


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
