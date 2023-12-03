const calculator = {
    plus: function(a, b){
        console.log(a + b);
    },
    minus: function(a, b){
        console.log(a - b);
    },
    divide: function(a, b){
        console.log(a / b);
    },
    times: function(a, b){
        console.log(a * b);
    },
    power: function(a, b){
        console.log(a ** b);
    },
};

calculator.plus(5, 1); 
calculator.minus(5, 1); 
calculator.divide(15, 5); 
calculator.times(5, 3); 
calculator.power(5, 2); 
