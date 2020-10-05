function say(greeting,honorifics){
    console.log(greeting+" " +honorifics+ this.name)
}


var tom={name:"tom sayer"};
var sayToTom=say.bind(tom);
sayToTom("hello","MR.")

