// let set = new Set
// set.add(1).add(2).add(3)
// console.log(set.has(2))
// console.log(set.has(4))
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SetDuble = /** @class */ (function () {
    function SetDuble(array) {
        this.array = array;
    }
    SetDuble.prototype.has = function (value) {
        return this.array.includes(value);
    };
    SetDuble.prototype.add = function (value) {
        this.array.push(value);
    };
    return SetDuble;
}());
var MutableSet = /** @class */ (function (_super) {
    __extends(MutableSet, _super);
    function MutableSet(array) {
        return _super.call(this, array) || this;
    }
    MutableSet.prototype["delete"] = function (value) {
        console.log("inside_before: ".concat(this.array));
        this.array = this.array.filter(function (num) { return num != value; });
        console.log("inside_after: ".concat(this.array));
        return true;
    };
    return MutableSet;
}(SetDuble));
var setDouble = new SetDuble([]);
console.log("first: ".concat(setDouble.has(1)));
setDouble.add(1);
console.log(setDouble.has(1));
var mutableSet = new MutableSet([0, 1, 2, 3]);
console.log(mutableSet.has(1));
console.log(mutableSet.array);
mutableSet["delete"](1);
console.log(mutableSet.has(1));
console.log(mutableSet.array);
