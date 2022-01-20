class Game{
  private pieces = Game.makePieces()

  private static makePieces() {
    return[
      new King('White', 'E', 1),
      new King('Black', 'E', 8),

      new Queen('White', 'D', 1),
      new Queen('Black', 'D', 8),

      new Bishop('White', 'C', 1),
      new Bishop('White', 'F', 1),
      new Bishop('Black', 'C', 8),
      new Bishop('Black', 'F', 8),
    ]
  }
}

class Position{
  constructor(
    private file: Fyle, // 標準クラスのFileと名前が重複しないように
    private rank: Rank,
  ) {}

  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    }
  }
}

abstract class Piece{
  protected position: Position

  constructor(
    private readonly color: Color,
    file: Fyle,
    rank: Rank
  ) {
    this.position = new Position(file, rank)
  }

  moveTo(position: Position) {
    this.position = position
  }
  abstract canMoveTo(position: Position): Boolean
}

class King extends Piece{
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}
class Queen extends Piece{
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}
class Bishop extends Piece{
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}
class Knight extends Piece{
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}
class Rook extends Piece{
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}
class Pawn extends Piece{
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}

type Color = 'Black' | 'White'
type Fyle = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' // 標準クラスのFileと重複する
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 // 標準クラスのFileと重複する

let game = new Game

console.log(game)
