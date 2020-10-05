// ###8.5.10 this값.... 함수가 호출되어 실행되는 시점에 this값이 결정된다
// this값은 함수가 호출되었을 때 그 함수가 속해 있던 객체의 참조이면 실행문맥의 디스 바인딩 컴포넌트가 참조하는 개체입니다\\\

var tom={
    name:'tom',
    sayHello:function (){
        console.log(`hello~~ ${this.name}`);
    }
};




tom.sayHello()




var wonyoung={name: "WONYOUNG"};
wonyoung.sayHello=tom.sayHello

wonyoung.sayHello()



function makeCounter(){
    var count=0;
    function f(){
        return count++;
    }
    return f;

}
var counter_machime=makeCounter()


console.log(counter_machime())

console.log(counter_machime())
console.log(counter_machime())
console.log(counter_machime())