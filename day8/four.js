function human(name){
    this.name= name;
    this.city ="NewYorl"
}

function robot(name){
    this.name= name;
    this.legs = 2;
    this.color ="red"
}

human.prototype = new robot()
var john = new human('john')
robot {name: undefined, legs: 2, color: "red"}
john
human {name: "john", city: "NewYorl"}
john.legs
2
john.color
"red"
