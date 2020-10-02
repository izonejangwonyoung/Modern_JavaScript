///재귀 함수: 자기 자신을 호출하는 행위



function fact(n){
    // var num=prompt(n);
    if(n<=1)  return 1;
    return  n*fact(n-1);
}



console.log(fact(5));




console.log('================');



const count_member=function f(n){
    if (n<=1) return 1;
    return n*f(n-1)

}

console.log('================');



var fact1=function (n){

    if (n<=1) return 1;
    return n*arguments.callee(n-1);   ///arguments.callee를 사용해서 이름 없는 재귀함수 호출 가능


}

console.log(fact1(6))