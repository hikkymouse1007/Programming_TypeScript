type ExistingUser = {
  id: number
  name: string
}

type NewUser = {
  name: string
}

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/delete
// JavaScript の delete 演算子は、オブジェクトからプロパティを削除します。
function deleteUser(user: {id?: number, name: string}) {
  delete user.id
}

let existingUser: ExistingUser = {
  id: 123456,
  name: 'Ima User'
}

deleteUser(existingUser)
console.log(existingUser.id)

type LegacyUser = {
  id?: number | string
  name: string
}

let legacyUser: LegacyUser = {
  id: '79331',
  name: 'Xin Yang'
}
