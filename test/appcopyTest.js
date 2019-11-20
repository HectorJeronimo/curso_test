const assert = require('chai').assert;
const app = require('../app');


describe('copy My application COPY ', function(){

    describe('copy Function sayHello()', function(){
        it('the function sayHello() should return a message', function(){
            assert.equal(app.app2.sayHello1('Hector Jeronimo'), 'Hello Hector Jeronimo');
        });
    
        it('sayHello should return a message type string', function(){
            let result = app.app2.sayHello1('Hector Jeronimo');
            assert.typeOf(result, 'string' );
        });
    });
    

    describe('copy Function calculateFactorial()', function(){
        it('The function calculateFactorial should to return a factorial number', function(){
            assert.equal(app.app2.calculateFactorial1(5), 120);
        });
    
        it('sayHello should return a message type string', function(){
            let result = app.app2.calculateFactorial1(5);
            assert.typeOf(result, 'number' );
        });
        
    });

    

});
