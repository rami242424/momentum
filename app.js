// const playerName = "nico";
// const playerPoints = 1515;

// 위 코드를 console.log() 식으로 바꿔보기
// 예를 들어 player.name, player.points 등

// 배열로 해볼까?
// const player = ["nico", 1515];
// player.name X

// Object로 만들기
const player = {
    name : "nico",
    point : 1515,
    fat : true,
}
// console.log(player);
// console.log(player.name);

// const 안의 property 수정 및 추가도 가능
// 수정
// console.log(player); // {name: 'nico', point: 1515, fat: true}
// player.fat = false; 
// console.log(player); // {name: 'nico', point: 1515, fat: false}

// 추가 
// console.log(player); // {name: 'nico', point: 1515, fat: true}
// player.lastName = "oh";
// console.log(player); // {name: 'nico', point: 1515, fat: true, lastName: 'oh'}

// 변형
console.log(player); //{name: 'nico', point: 1515, fat: true}
player.point = player.point + 10;
console.log(player); // {name: 'nico', point: 1525, fat: true}
console.log(player.point); // 1525
