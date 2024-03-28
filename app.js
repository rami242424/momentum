const age = parseInt(prompt("how old are you?"));

if (isNaN(age) || age < 0 ) {
    alert("plz write a real positive number");    
} else if(age < 18) {
    alert("you are too young to drink");
} else if(age >= 18 && age <= 50){
    alert("you can drink");
} else if (age > 50 && age <= 80){
    alert("Do not drink for your healthy");
} else if (age > 80){
    alert("you can do whatever you want");
}

