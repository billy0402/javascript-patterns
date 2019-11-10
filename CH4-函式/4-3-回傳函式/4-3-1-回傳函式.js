var setUp = function () {
    alert(1);
    return function () {
        alert(2);
    };
};

// 使用 setUp 函式
var my = setUp(); // alert 1
my(); // alert 2


var setUp = function () {
    var count = 0;
    return function () {
        return count += 1;
    };
};

// 用法
var next = setUp();
console.log(next()); // 1
console.log(next()); // 2
console.log(next()); // 3
