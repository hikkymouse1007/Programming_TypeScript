type HasSides = {numberOfSides: number}
type SideHaveLenght = {sideLenght: number }

function logPerimeter<Shape extends HasSides & SideHaveLenght>(s: Shape): Shape {
  console.log(s.numberOfSides * s.sideLenght)
  return s
}

type Square = HasSides & SideHaveLenght
let square: Square = {numberOfSides: 4, sideLenght: 3}
logPerimeter(square)