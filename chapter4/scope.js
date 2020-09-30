// var a="global";
//
//
// function  f(){
//     var a='local';
//     console.log(a);
//     return a;
// }
//
// f();
// console.log(a);


//
// function f(){
//     console.log(a);
//     var a="local"
//     console.log(a);
//     return a;
//
// }
// f()


//
// function g(){
//
//     var a="local";
//     console.log(a);
//     return a;
//
// }
//
// g();
// console.log(a);//a is not defined


function g(){

    a="local";
    console.log(a);
    return a;

}

g();
console.log(a);//  local, local