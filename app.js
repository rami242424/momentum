const age = parseInt(prompt("how old r u"));

if (isNaN(age) || age <0){
    console.log("plz write a number"); 
} else if (age < 18){
    console.log("you are too young");
} else if (age >= 18 && age <= 50){
    console.log("you can drink");
} else if (age > 50 && age <= 80){
    console.log("you should exercise");
} else if (age === 100){
    console.log("wow you are wise"); // 실행됨. age에 parseInt 안하면 동작X
} else if (age > 80){
    console.log("you can do whatever you want");
}
// } else if (age == 100) {
//     console.log("wow you are wise"); // 실행안됨 why? 80이상이다 = 100
// }