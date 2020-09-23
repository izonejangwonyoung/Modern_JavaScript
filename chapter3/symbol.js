var sym1= Symbol();
var sym2=Symbol();

console.log(sym1==sym2);//값 다른 것 확인
var IZONE =Symbol("아이즈원");

console.log(IZONE.toString);


var sym3=Symbol.for("club");

var sym4=Symbol.for("club");

console.log(sym3==sym4);

