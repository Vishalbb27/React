const showbook=({name:bookname,author:{name:authorname}})=>{
    console.log(`The book ${bookname} is written by ${authorname}`);
}
showbook({name:"The Alchemist",author:{name:"Paulo Coelho"}})

const book={
    id :100,
    name:"The Alchemist",
    author:{name : "Paulo Coelho"},
    price: 200,
}

const {id,name,author:{name:authorname},price}=book;
showbook(book)


class Person{
    constructor(name){
        this.setName(name);
    }
    getName(){
        return this.name;
    }
    setName(newName){
        newName = newName.trim();
        if(newName.length>0){
            this.name=newName;
        }
        else {
            console.log("Invalid name");
        }
    }
}

let john = new Person("");
john.setName("John");
console.log(john.getName());

