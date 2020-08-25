if(condition){
    ////do something
}else{
     ////do something
}

var a = 98908
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 98908 is even

var a = 12
if(a%2==0){
    console.log(`Number ${a} is even`)
}else if(a%3===0){
    console.log(`Number ${a} is divisible by 3`)
}
else{
    console.log(`Number ${a} is odd`)
}



var a = 12
if(a%2==0){
    console.log(`Number ${a} is even`)
}else if(a%3===0 || a%5===0){
    if(a%3===0){
        console.log(`Number ${a} is divisible by 3`)
    }else{
        console.log(`Number ${a} is divisible by 5`)
    }
}
else{
    console.log(`Number ${a} is odd`)
}


var a = 10
if(a){
    console.log("hii")
}else{
    console.log("bie")
}
"hi"

var a = -1
if(a){
    console.log("hii")
}else{
    console.log("bie")
}

"hi"

var a = ''
if(a){
    console.log("hii")
}else{
    console.log("bie")
}
"bie"
var a = 0
if(a){
    console.log("hii")
}else{
    console.log("bie")
}
"bie"

truthy = any number + or - except 0, "fdbf", true
falsy= 0, null, undefined, '',false

//////
ternery
/////
var a = 10
a>10?"hii":"bie"

var a = 10
a>10?"hii":"bie"
"bie"
var a = 10
a==10?"hii":"bie"
"hii"
var a = 10
a==10?a+1:a-1
11
var a = 10
a>10?a+1:a-1
9

//////
switch
////////

var a = 10
switch(a%2){
    case 0:
        console.log(`Number ${a} is even`)
        break;
    case 1:
        console.log(`Number ${a} is odd`)
        break;
    default:
        console.log("I dont know")
}

var name = "kieve"
switch(name){
    case 'aakash':
        console.log(`${name} is user`)
        break;
    case 'john':
        console.log(`${name} is admin`)
        break;
    case 'kieve':
        console.log(`${name} is super admin`)
        break;
    default:
        console.log('i dont know')
}

/////
if multiple condition and multiple output use {if else}
if one condition multiple ouptut use {switch}
if one condition and one output use(ternery)