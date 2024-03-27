const player = {
    name: "nico",
    sayHello : function(otherPersonsName){
        // console.log("hello"); // hello
        // console.log(otherPersonsName); // lynn
        console.log("hello " + otherPersonsName + " nice to meet you");
    },
};

// console.log(player.name); // nico
// player.sayHello("lynn"); // hello or lynn
player.sayHello("lynn");
player.sayHello("nico");
player.sayHello("rami");