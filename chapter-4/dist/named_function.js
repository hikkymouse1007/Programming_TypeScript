function add(a, b) {
    return a + b;
}
function greet(name) {
    return 'hello' + name;
}
var greet2 = function (name) {
    return 'hello' + name;
};
var greet3 = function (name) {
    return 'hello' + name;
};
var greet4 = function (name) {
    return 'hello' + name;
};
var greet5 = new Function('name', 'return "hello " + name');
add(1, 2);
greet('Crystal');
// add(1)
// add(1, 'a')
function log(message, userId) {
    var time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'Not signed in');
}
log('Page loaded');
log('User signed in', 'da763be');
function log2(message, userId) {
    if (userId === void 0) { userId = 'Not signed in'; }
    var time = new Date().toLocaleTimeString();
    console.log(time, message, userId);
}
log2('User clicked on a button', 'da763be');
log2('User signed out');
function log3(message, context) {
    if (context === void 0) { context = {}; }
    var time = new Date().toISOString();
    console.log(time, message, context.userId);
}
function sum(numbers) {
    return numbers.reduce(function (total, n) { return total + n; }, 0);
}
console.log(sum([1, 2, 3]));
