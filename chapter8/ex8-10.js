function Primes(n){
    ///에라스토레네스의 체로 2~n의 소수 구하기
    var p=[];
    for(var i=2; i<=n; i++) p[i]=true;
    var max= Math.floor(Math.sqrt(n));
    var x=2;
    while (x<=max){
        for(var i=2*x;i<=n; i+=x) p[i]=false;
        while (!p[++x]);
    }
    ///소수만 꺼내 배열 primes에 저장



var primes=[], nprimes=0;
for(var i=2; i<=n; i++) if(p[i]) primes[nprimes++]=i;
p=null;

return function (m){
    for(var i=0,product=1; i<m; i++){
        product *= primes[Math.floor(Math.random()*nprimes)];

    }
    return product;
};
}
var primeProduct=Primes(100000);
console.log(primeProduct(2));