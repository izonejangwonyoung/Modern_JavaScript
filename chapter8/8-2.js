function myConcat(seperator){
    var s=""
    for (var i=1; i<arguments.length; i++) {
        s += arguments[i];
        if(i<arguments.length-1) s+=seperator;
    }
    return s;


}
console.log(myConcat("/","a","b","c"))




function fact(n){
    if(n<=1) return 1;
    return n*fact(n-1)

}
console.log(fact(5));