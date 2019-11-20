
function sayHello1(name){
    return "Hello " + name;
}

function calculateFactorial1( num ){
    let calculo = 1;
    for(let i=1; i <= num; i++){
        calculo *= i; 
    }
    return calculo;
}


module.exports = {
    sayHello1,
    calculateFactorial1
};


