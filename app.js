const calculator = {
    plus : function(potato, carrot){
        console.log("plus = " + (potato + carrot));
    },

    divide : function(potato, carrot){
        console.log("divide = " + (potato / carrot));
    },

    times : function(potato, carrot){
        console.log("times = " + (potato * carrot));
    },

    minus : function(potato, carrot){
        console.log("minus = " + (potato - carrot));
    },
};

calculator.plus(5, 5); // plus = 10
calculator.divide(5, 5); // divide = 1
calculator.times(5, 5); // times = 25
calculator.minus(5, 5); // minus = 0