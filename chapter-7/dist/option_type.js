function isValid(date) {
    console.log("date.getTimezoneOffset(): ".concat(date.getTimezoneOffset()));
    return Object.prototype.toString.call(date) === '[object Date]'
        && !Number.isNaN(date.getTimezoneOffset());
}
function ask() {
    var result = prompt('When is your birthday?') || '';
    if (result === null) {
        return [];
    }
    return [result];
}
function parse(birthday) {
    console.log("typed birthday from prompt: ".concat(birthday));
    var date = new Date(birthday);
    if (!isValid(date)) {
        1;
        return [];
    }
    return [date];
}
function flatten(array) {
    return Array.prototype.concat.apply([], array);
}
flatten(ask().map(parse));
var Some = /** @class */ (function () {
    function Some(value) {
        this.value = value;
    }
    Some.prototype.flatMap = function (f) {
        console.log("Some Class");
        console.log("this.value: ".concat(this.value));
        console.log("flatMap returns: ".concat(Object.values(f(this.value))));
        return f(this.value);
    };
    Some.prototype.getOrElse = function () {
        console.log("Some Class");
        console.log("getOrElse returns: ".concat(this.value));
        return this.value;
    };
    return Some;
}());
var None = /** @class */ (function () {
    function None() {
    }
    None.prototype.flatMap = function () {
        console.log("None Class");
        console.log("flatMap() returns ".concat(this));
        return this;
    };
    None.prototype.getOrElse = function (value) {
        console.log("getOrElse returns: ".concat(value));
        return value;
    };
    return None;
}());
function Optional(value) {
    if (value == null) {
        return new None;
    }
    return new Some(value);
}
var number = Optional(6)
    .flatMap(function (n) { return Optional(n * 3); })
    .flatMap(function (n) { return new None; })
    .getOrElse(7);
var nullValue = Optional(null)
    .flatMap()
    .getOrElse(null);
var undefinedValue = Optional(undefined)
    .flatMap()
    .getOrElse(undefined);
ask()
    .flatMap(parse)
    .flatMap(function (date) { return new Some(date.toISOString()); })
    .flatMap(function (date) { return new Some('Date is ' + date); });
// .getOrElse('Erro parsing date for some reason')
