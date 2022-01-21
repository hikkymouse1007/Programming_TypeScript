interface User<Age extends number > {
  name: string
}

interface User<Age extends number> {
  age: number
}

let a : User<number> = {
  name: "Mike",
  age: 12
}