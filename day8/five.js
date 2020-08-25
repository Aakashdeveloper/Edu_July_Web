class geo{
    constructor(){
        this.lat=22.4;
        this.long=77.443
    }
}


class language extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name=name;
        this.country=country
    }
    greet = () => {
        return `Say Hi`
    }
}


var English = new language('English','UK')
undefined
English
language {lat: 22.4, long: 77.443, name: "English", country: "UK", greet: ƒ}