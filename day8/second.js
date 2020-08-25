const { last } = require("lodash");

var firstname = "Michal";
var lastname="Zoe";

var sayhi = {
    firstname:'John',
    lastname:'Ammy',
    greet:function(){
        return `Say Hi to ${firstname} ${lastname}`
    }
}

sayhi.greet()
"Say Hi to Michal Zoe"


var firstname = "Michal";
var lastname="Zoe";

var sayhi = {
    firstname:'John',
    lastname:'Ammy',
    greet:function(){
        return `Say Hi to ${this.firstname} ${this.lastname}`
    }
}

sayhi.greet()
"Say Hi to John Ammy"


