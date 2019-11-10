// 定義三個全域變數
var globalVar = 1;
globalNoVar = 2; // 反模式
(function () {
    globalFromFunc = 3;
}()); // 反模式

// 嘗試刪除
console.log(delete globalVar); // false
console.log(delete globalNoVar); // true
console.log(delete globalFromFunc); // true

// 測試刪除
console.log(typeof globalVar); // "number"
console.log(typeof globalNoVar); // "undefined"
console.log(typeof globalFromFunc); // "undefined"
