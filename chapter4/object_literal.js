var card={suit:'하트', rank:'SS'}




console.log(card.suit)
console.log(card['rank'])

console.log("suit"in card);
console.log("messi"in card);

console.log(card.suit);//하트
card.suit='검은색'
console.log(card.suit);//검은색     객체는 참조 타입. 중간에 선언이 바뀌면 그대로 따라감

