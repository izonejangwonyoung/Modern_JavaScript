///배열 리터럴로 생성하기


var events=[2,4,6,8];   ///일반 배열
console.log(events)

var empty=[]        ///빈 배열
console.log(empty)


var a=[2, , 6]      ///값 생략하면 그 요소는 not created
console.log(a)



var various =[3.14,"pi",true,{x:1,y:2}] ///변수의 요소에는 변수와 마찬가지로 모든 타입의 값이 올 수 있습니다.
console.log(various)


////////////////length property


var evens=[2,4,6,8];
console.log(evens.length)

var a=["A","B","C","D"];
a.length=6
console.log(a);   ///length에 큰 값 대입하면 그냥 empty items 생성


var a=["A","B","C","D"];
a.length=2
console.log(a); ///




/////ㅇ////어레이 생성자로 생성하기


var evens= new Array(2,4,6,8);
var empty=new Array();
var a=new Array(2,4);
var various = new Array(3.14,"pi",true,{x:1,y:2});
var x=new Array(3);
console.log(x.length);
console.log(various[0])


evens[4]=10
console.log(evens)
evens.push(12)
console.log(evens)

delete evens[0];

console.log(evens)


var a=["A","B","C"];
a[4]="E"
console.log(a);
