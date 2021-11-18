var inst1 = {
    firstName: 'john',
    lastName: 'barrowman'
};
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
inst1 = new Person('matt', 'smith');
console.log(inst1);
