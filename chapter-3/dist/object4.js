var obj_a;
obj_a = { b: 1 };
obj_a = { b: 1, c: undefined };
obj_a = { b: 1, c: 'd' };
obj_a = { b: 1, 10: true };
obj_a = { b: 1, 10: true, 20: false };
obj_a = { 10: true }; // エラー
obj_a = { b: 1, 33: 'red' }; //エラー
// インデックスシグネチャ
// キーの数を任意に持つことができる
var airplane_seatingAssignments = {
    '34D': 'Boris Cherry',
    '34E': 'Bill Gates'
};
