// 警告: 以下全是反模式

// 一個空物件
var obj = new Object();
console.log(obj.constructor === Object); // true

// 一個數值物件
var obj = new Object(1);
console.log(obj.constructor === Number); // true
console.log(obj.toFixed(2)); // "1.00"

// 一個字串物件
var obj = new Object('I am a string.');
console.log(obj.constructor === String); // true
// 一般物件沒有 subString() 方法
// 但 string 物件有
console.log(typeof obj.substring); // "function"

// 一個布林物件
var obj = new Object(true);
console.log(obj.constructor === Boolean); // true
