let obj_a: {
  b: number //　必須プロパティ
  c?: string // 省略可能プロパティ undefinedも可能
  [key: number]: boolean // 数値プロパティを任意の数だけ持てる
}
obj_a = {b: 1}
obj_a = {b: 1, c: undefined}
obj_a = {b: 1, c: 'd'}
obj_a = {b: 1, 10: true}
obj_a = {b: 1, 10: true, 20: false}
obj_a = {10: true} // エラー

obj_a = {b: 1, 33: 'red'} //エラー

// インデックスシグネチャ
// キーの数を任意に持つことができる
let airplane_seatingAssignments: {
  [setNumber: string]: string
} = {
  '34D': 'Boris Cherry',
  '34E': 'Bill Gates',
}