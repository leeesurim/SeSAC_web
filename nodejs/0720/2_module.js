const { Car } = require('./2_class02.js');

console.log( Car );

var car1 = new Car("red");
console.log( car1.returnColor() );
console.log( car1.isDoor );