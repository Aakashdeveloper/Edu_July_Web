console.log()  >>> check output or debugg 
alert("hiii") >>> Notification
confirm() >> to ask for confirmation
prompt() >> to take input

console.log("hii")
VM1166:1 hii
undefined
alert("Form submiited")
undefined
confirm("Do you want to leave")
true
confirm("Do you want to leave")
false
var out = confirm("Do you want to leave")
undefined
out
true
var out = confirm("Do you want to leave")
undefined
out
false

var a = prompt("What is your name")
undefined
a
"Aakash"
var b = prompt("Whst is your age")
undefined
b
"10"

var first = prompt("Enter first number")
var second = prompt("Enter second number")
alert(first+second)
"1"+"12"

////
es5
////
var a = "10"
var b = "20"
parseInt(a)+parseInt(b)

var a = "10"
var b = "20"
parseInt(a)+parseInt(b)
30
parseInt(a)
10
var c = "hh1"
undefined
parseInt(c)
NaN
var d  = "10.11"
undefined
parseInt(d)
10
parseFloat(d)
10.11
parseFloat(a)
10

////
es6
////
Number(a)
10
Number(d)
10.11

/////
var first = prompt("Enter first number")
var second = prompt("Enter second number")
alert(Number(first)+Number(second))