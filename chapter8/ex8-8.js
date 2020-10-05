function Person(name,age){
    var _name = name;
    var _age = age;
    return {
        getName: function (){return _name;},
        getAge: function (){return _age;},
        setAge:function (x){_age=x;}

    };
}

var person=Person("장원영",18);
console.log(person.getName())
console.log(person.getAge())

var person=Person("최예나",22);
console.log(person.getName())
console.log(person.getAge())
