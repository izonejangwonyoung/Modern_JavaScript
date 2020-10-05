function memorize(f){
    var cache={};
    return function (x){
        if(cache[x]==undefined) cache[x]=f(x);
    return cache[x];
    };

}

function isPrime(n){
    if(n<2) return false;
    var m=Math.sqrt(n); // n의 제곱근을 구하는 함수 sqrt
    for(var i=2; i<m; i++)if(n%i==0) return false;
    return true;
}

var isPrime_memo=memorize(isPrime);
var N=1000;
for(var i=2; i<=N;i++) isPrime_memo(i);
for(var i=2; i+2<=N;i++) {
    if(isPrime_memo(i)&& isPrime_memo(i+2)) console.log(i+","+(i+2));

}


console.log(isPrime_memo())

