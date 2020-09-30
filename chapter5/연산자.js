//////표현식과 연산자


console.log(15%4)


console.log(1+"2month")/// 피연산자 중 하나가 문자열이면 나머지 피연산자를 문자열로 만든다.




/////math 객체의 property
function polarToDescartes(r,theta){
    var angle=Math.PI*theta/180;

    return {x: r*Math.cos(angle),y:r*Math.sin(angle)}


}


console.log(polarToDescartes(5,10))




