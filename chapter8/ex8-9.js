function makeMultiplier(x){
    return function (y){
        return x*y;
    };

}

var multi2=makeMultiplier(2);
var multi10=makeMultiplier(10);

console.log(multi2(35245));
console.log(multi10(3154));
