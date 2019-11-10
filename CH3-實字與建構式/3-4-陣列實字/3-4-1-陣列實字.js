// 有三個元素的陣列

// 警吿: 反模式
var a = new Array('itsy', 'bitsy', 'spider');

// 一模一樣的陣列
var a = ['itsy', 'bitsy', 'spider'];

console.log(typeof a); // "object"，因為陣列也是物件
console.log(a.constructor === Array); // true
