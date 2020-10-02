///하노이의 탑 알고리즘 만들기 by using js
//https://flashgamerz.tistory.com/504


var hanoi = function hanoi_tower(n,from,to,other){
    if (n<1)  { return; }    ////return 명령문은 함수 실행을 종료하고, 주어진 값을 함수 호출 지점으로 반환합니다
    hanoi(n-1,from,other,to);
    console.log(`${n}번 째 원판: ${from}->${to}`)
    hanoi(n-1,other,to,from);


}

hanoi(3,"A","B","C");