// Array와 다른 Object (프로퍼티를 가진 데이터를 저장해준다.)
// 방법1
// const playerName = "rami";
// const playerPoint = 100;
// const playerFat = false;

// 방법2
const player = {
    name : "rami",
    point : 100,
    fat : false,
};

console.log(player); // {name: 'rami', point: 100, fat: false}
// console.log(player.name); // rami
// console.log(player["name"]); // rami

player.fat = true; // fat 이 false > true로 수정됨
player.firstName = "oh"; // firstName 이 추가됨
player.point = player.point + 10; // 기존값 100에 10이 추가됨
console.log(player); // {name: 'rami', point: 110, fat: true, firstName: 'oh'}


