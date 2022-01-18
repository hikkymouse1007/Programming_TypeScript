function logPerimeter(s) {
    console.log(s.numberOfSides * s.sideLenght);
    return s;
}
var square = { numberOfSides: 4, sideLenght: 3 };
logPerimeter(square);
