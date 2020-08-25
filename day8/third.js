function human(name){
    this.name= name;
    this.city ="NewYorl"
}


var john = new human('john')
john.name
"john"
john.city
"NewYorl"


var human = (name) => {
    this.name= name;
    this.city ="NewYorl"
}

var ammy = new human('ammy')
VM273:3 Uncaught TypeError: human is not a constructor
    at <anonymous>:3:12



function language(name,country){
    this.name = name;
    this.country = country;
    this.greet= function(){
        return `Say Hi`
    }
}


var Hindi = new language('Hindi','India')
Hindi
language {name: "Hindi", country: "India"}


//////Es6////////

class language1{
    constructor(name,country){
        this.name=name;
        this.country=country
    }
    greet = () => {
        return `Say Hi`
    }
}

var English = new language1('English','UK')
English
language1 {name: "English", country: "UK", greet: ƒ}
English.greet()
"Say Hi"


