var Cat = /** @class */ (function () {
    function Cat() {
        this.name = "Yizzy";
    }
    Cat.prototype.eat = function (food) {
        console.info('Ate some', food, 'Yummy!!');
    };
    Cat.prototype.sleep = function (hours) {
        console.info('Slept for', hours, 'hours zzz...');
    };
    Cat.prototype.meow = function () {
        console.info('Bow Wow!!');
    };
    return Cat;
}());
var cat = new Cat;
console.info(cat.name);
cat.meow();
cat.eat("cat nipAA");
cat.sleep(24);
