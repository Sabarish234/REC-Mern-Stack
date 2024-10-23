console.log("Hello world");

var a = 100;
var b = 200;
var c = a+b;
console.log("Addition of 2 numbers is : "+c);

var km = 100;
var miles = km * 0.62137119;
console.log("Equivalent of "+km+" kms is "+miles+" miles.");

var kg = 100;
var pounds = kg * 2.20462262;
console.log("Equivalent of "+kg+" kgs is "+pounds+" pounds.");

var m = 1;
var cm = m * 100;
console.log("Equivalent of "+m+" metres is "+cm+" centimetres.");

var p = 100000;
var t = 3;
var r = 5;
var si = (p*t*r)/100;
console.log("Interest amount is ₹"+si);

var h = 1.78;
var w = 74;
var bmi = w/(h*h);
if(bmi < 18.5)
    console.log("Underweight");
else if(bmi>18.5 && bmi<24.9)
    console.log("Normal weight");
else if(bmi>25 && bmi<29.9)
    console.log("Over weight");
else if(bmi > 30)
    console.log("Obese");

var num1 = 45;
var num2 = 75;
var num3 = 65;
var g;
if(num1 > num2){
    if(num1 > num3)
        g = num1;
    else
        g = num3;
}
else{
    if(num2 > num3)
        g=num2;
    else
        g=num3;
}
console.log("Greatest number is : "+g);

var ph = "90022321212";
if (ph.length!=10  || isNaN(ph))
    console.log("Invalid");
else
    console.log("Valid");

let a = [2,5,6,6,2,1,0];
a.sort((x,y)=>{
    return y-x;
});
console.log(a);

setTimeout(()=>{
    console.log("Hello");
},5000);