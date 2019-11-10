// 此片段目的在於說明，並非合法的 JavaScript
// 我們有這個函式
function add(x, y) {
    return x + y;
}

// 且我們知道參數
add(5, 4);

// 步驟1: 替換掉一個參數
// 部分應用 (partial application)
// function add(5, y) {
//     return 5 + y;
// }

// 步驟2: 替換掉另一個參數
// function add(5, 4) {
//     return 5 + 4;
// }


var add = function (x, y) {
    return x + y;
};

// 全應用
add.apply(null, [5, 4]); // 9

// 部分應用
var newAdd = add.partiallApply(null, [5]);
// 用一個參數來應用新的函式
newAdd.apply(null, [4]); // 9
