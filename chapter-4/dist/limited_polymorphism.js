var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var a = { value: 'a' };
var b = { value: 'b', isLeaf: true };
var c = { value: 'c', children: [b] };
function mapNode(node, f) {
    console.log(node);
    return __assign(__assign({}, node), { value: f(node.value) });
}
var a1 = mapNode(a, function (_) { return _.toUpperCase(); });
var b1 = mapNode(b, function (_) { return _.toUpperCase(); });
var c1 = mapNode(c, function (_) { return _.toUpperCase(); });
console.log("a1: ".concat(a1.value)); // A
console.log("b1: ".concat(b1.isLeaf)); // B
console.log("c1.children: ".concat(c1.children)); // C
console.log("c1.children.value: ".concat(c1.children[0])); // C
