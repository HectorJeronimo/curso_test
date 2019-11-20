const assert = require('chai').assert;
const app = require('../app');


describe('My application', function(){

    describe('Function sayHello()', function(){
        it('the function sayHello() should return a message', function(){
            assert.equal(app.sayHello('Hector Jeronimo'), 'Hello Hector Jeronimo');
        });
    
        it('sayHello should return a message type string', function(){
            let result = app.sayHello('Hector Jeronimo');
            assert.typeOf(result, 'string' );
        });
    });
    

    describe('Function calculateFactorial()', function(){
        it('The function calculateFactorial should to return a factorial number', function(){
            assert.equal(app.calculateFactorial(5), 120);
        });
    
        it('sayHello should return a message type string', function(){
            let result = app.calculateFactorial(5);
            assert.typeOf(result, 'number' );
        });
        
    });

    

});
