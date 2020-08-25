function
methods
arrow Function

////////////////////////////////////
var a = 10
var b = 20
a+b
30


function add(a,b){
    return a+b
}

add(2,6)
8
add(55,66)
121
add('a','b')
"ab"

function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = `${userInput} is even`
    }else{
        out = `${userInput} is odd`
    }
    return out
}

isEven(2)
"2 is even"
isEven(29)
"29 is odd"

/////method////
var add = function(a,b){
    return a+b
}

add(1,2)
3


//////arrow////
var add =(a,b) =>{return a+b}