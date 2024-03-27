const calculator ={
    plus: function (a, b){
        console.log(a + b);
    },
    
    times: function (a, b){
        console.log(a * b);
    },
    
    minus: function(a, b){
        console.log(a - b);
    },
    
    divide: function(a, b){
        console.log(a / b);
    },
    
    power: function(a, b){
        console.log(a ** b);
    },
}

calculator.plus(2,3);
calculator.times(2,3);
calculator.minus(2,3);
calculator.divide(2,3);
calculator.power(2,3);