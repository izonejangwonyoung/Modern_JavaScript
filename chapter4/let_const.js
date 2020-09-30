///블록 유효 범위.. 이 변수들은 중괄호 안에서만 유효한다. let은 변수를 선언하고 const 는 한 번만 할당할 수 있는 상수를 선언합니다.




//
// let a;
//
// let a,b,c;


// const c=2;
// console.log(c)
//
// c=5;  /// Assignment to constant variable. const 는 한 번만 할당할 수 있음.. 그래서 type error//

//
// const izone={x:1,b:2};
// izone.x=4;
// console.log(izone);
////const로 선언한 상수 값은 수정할 수 없지만 상수 값이 객체이거나 배열일 경우에는 프로퍼티 또는 프로퍼티 값을 수정할 수 있습니다.


//
//
// ///함수 리터럴로 함수 정의하기;
// var square=function (x) {
//     return x*x;
// };


//
// console.log(square(3))
// var square =function (x){return x*x;}
//





var circle={
    center:{x:1.2,y:2.6},
    radius: 2.5,
    area: function (){
        return Math.PI*circle.radius*circle.radius
    }
}


console.log(circle.area())


circle.translate=function(a,b){
    this.center.x=this.center.x+a;
    this.center.y=this.center.x+b;
};

circle.changeArea=function (c){
    this.radius=this.radius+c;
};


console.log(circle.translate(3,4))
console.log(circle.center);
console.log(circle.changeArea(3))
console.log(circle.area())



//이런게 객체 지향 프로그래밍

//함수 활용의 장점
// 1. 재사용가능
// 2. 만든 프로그램 이해 쉬움
// 3.프로그램 수정 심플
//
//
