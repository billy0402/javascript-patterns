// 反模式: 使用 new Function 建構式建立函式
// 只是為了展示一下而已
var add = new Function('a, b', 'return a + b');
console.log(add(1, 2));
// 3

/*
 * 缺點
 * 1. 程式碼使用字串傳遞並執行，需使用到跳脫字元，讀寫不易
 * 2. 缺乏控制變數的作用域保護，var 參數容易成為全域變數
 */
