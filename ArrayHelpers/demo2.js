let greet = `Hello World`;
console.log(greet);

let name = `John`;
console.log(`Hello ${name}`);

let num1 = 10; 
let num2 = 20;
console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);

const person = {
    name: "John",
    age: 25,
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
};

person.greet();