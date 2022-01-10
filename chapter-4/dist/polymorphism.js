function filter(array, f) {
    var result = [];
    console.log(f);
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        console.log(item);
        console.log(f(item));
        if (f(item)) {
            result.push(item);
        }
    }
    return result;
}
filter([1, 2, 3, 4], function (_) { return _ < 3; });
