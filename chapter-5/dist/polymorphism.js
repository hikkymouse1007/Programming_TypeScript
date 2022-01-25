var MyMap = /** @class */ (function () {
    function MyMap(initialKey, initialValue) {
        var _a;
        this.hash = (_a = {}, _a["".concat(initialKey)] = initialValue, _a);
    }
    MyMap.prototype.getAll = function () {
        return this.hash;
    };
    MyMap.prototype.get = function (key) {
        return this.hash["".concat(key)];
    };
    MyMap.prototype.set = function (key, value) {
        this.hash["".concat(key)] = value;
        console.log("success!!");
    };
    MyMap.prototype.merge = function (map) {
        return;
    };
    MyMap.of = function (k, v) {
        return;
    };
    return MyMap;
}());
var myMap = new MyMap("key1", 1);
console.log(myMap.get("key1"));
console.log(myMap.set("key2", 2));
console.log(myMap.get("key2"));
console.log(myMap.getAll());
var a = new MyMap("k", 1);
var b = new MyMap("k", true);
console.log(a.get("k"));
console.log(b.get("k"));
