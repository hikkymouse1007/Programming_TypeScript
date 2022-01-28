type Food = {
  calories: number
  tasty: boolean
}

type Sushi = Food &{
  salty: boolean
}

type Cake = Food &{
  sweet: boolean
}

interface Foody  {
  calories: number
  tasty: boolean
}

interface Sushiy extends Foody {
  salty: boolean
}

interface Cakey  extends Foody {
  sweet: boolean
}
