class Circle{
    static calculateArea(radius){
        return Circle.PI * radius * radius;
    }

}

Circle.PI = 3.14;
console.log(Circle.calculateArea(5));
console.log(Circle.PI);
