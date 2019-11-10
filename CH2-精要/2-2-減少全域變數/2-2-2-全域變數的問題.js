function sum(x, y) {
    // 反模式: 隱含的全域變數 (result)
    result = x + y;
    return result;
}

function sum(x, y) {
    var result = x + y;
    return result;
}

function foo() {
    // 反模式: 隱含的全域變數 (b)
    // var a = (b = 0);
    var a = b = 0;
    // ...
}

function foo() {
    var a, b;
    // 兩者皆為區域變數
    a = b = 0;
    // ...
}
