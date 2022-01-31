// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/delete
// JavaScript の delete 演算子は、オブジェクトからプロパティを削除します。
function deleteUser(user) {
    delete user.id;
}
var existingUser = {
    id: 123456,
    name: 'Ima User'
};
deleteUser(existingUser);
// console.log(JSON.parse(`${existingUser}`))
console.log(existingUser.id);
