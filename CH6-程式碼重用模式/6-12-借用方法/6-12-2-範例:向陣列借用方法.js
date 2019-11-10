function f() {
    // Array.prototype.slice.call(...)，較冗長，但可以省下建立空陣列的運算
    var args = [].slice.call(arguments, 1, 3);
    return args;
}

// 範例
f(1, 2, 3, 4, 5, 6); // returns [ 2, 3 ]
