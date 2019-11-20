const app2 = require('../curso_test/app_copy');

function sayHello (name){
    return "Hello " + name;
}

function calculateFactorial ( num ){
    let calculo = 1;
    for(let i=1; i <= num; i++){
        calculo *= i; 
    }
    return calculo;
}


module.exports = {
    sayHello,
    calculateFactorial,
    app2
};


