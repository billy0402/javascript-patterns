// 具名函式表示式 (named function expression)
var add = function add(a, b) {
    return a + b;
};
console.log(add.name);
// "add"

// 函式表示式 (function expression)，又稱為匿名函式 (anonymous function)
var add = function (a, b) {
    return a + b;
};
console.log(add.name);
// ""

// 函式宣告式 (function declaration)
function foo() {
    // 函式本體在這裡
}

// 函式實字 -> 函式表示式 or 具名函式表示式
