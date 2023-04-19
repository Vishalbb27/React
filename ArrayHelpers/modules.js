//why modules are used in javascript?   //to avoid the name collision

//export variables

// let msg = "Hello World";
// export default { msg };

for(var i=0;i<10;i++){
  setTimeout(function(){
    console.log(i);
  },0)
}

function foo(){
    console.log(name)
    console.log(age)
    var name="foo"
    let age=10
}
foo()