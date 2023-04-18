//rest operator
function sum(a,b){
    return a+b;
}

console.log(sum(1,2,3,4,5,6,7,8,9,10));

//reduce method in array 

function sum1(...params){
    return params.reduce((previous, current) =>{
        return previous +current;
    })
}

console.log(sum1(1,2,3))
console.log(sum1(1,2,3,4,5));


function restTest(a, b, ...params) {
    console.log(a);
    console.log(b);
    console.log(params);
} //rest can be used only in last parameter

restTest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function greet(greeting,...names){
    return `${greeting} ${names.join(" ,")}!`
}

console.log(greet("hello","steev","Bills"))
console.log(greet("hello"));