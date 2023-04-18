//Arrow Function in JavaScript ES6
let a = 10;
let welcome =
  a < 15
    ? () => console.log("Good Morning")
    : () => console.log("Good Evening");
welcome(0);

var materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(
  materials.map((material) => {
    return material.length;
  })
);

function stu() {
  this.name = "John";
  this.age = 25;
  this.sayName = function () {
    console.log(this.name);
    // function inFun() {
    //   console.log(this.name);
    // //   console.log(this);
      let inFun = () => {
        console.log(this.age);
        console.log(this);
    //   };
    }
    inFun();
  };
}

let x = new stu();
x.sayName();
