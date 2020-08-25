/*var a = 10;
function add(){
    var b = 20
    return a+b
}

console.log(add())
console.log(a)
console.log(b)

for(i=0;i<5;i++){
    let b = 20
    console.log(a+b+i)
}

console.log(a)
console.log(b)*/

a =10
var b;
b = 20
console.log(add(a,b))

function add(a,b){
    return a+b
}

var a;

/////////////////////////////////////
var a;
var b;
function add(a,b){
    return a+b
}
a=10
b=20
console.log(add(a,b))


function mul(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}



mul(5)(4)(3)