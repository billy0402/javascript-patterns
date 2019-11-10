// 有一個元素的陣列
var a = [3];
console.log(a.length); // 1
console.log(a[0]); // 3

// 有三個元素的陣列
var a = new Array(3);
console.log(a.length); // 3
console.log(a[0]); // "undefined"


// 使用陣列實字
var a = [3.14];
console.log(a[0]); // 3.14

// var a = new Array(3.14); // RangeError: Invalid array length
console.log(typeof a); // "undefined"


// 使用 Array() 的時機，例如: 重複字串
var space  = new Array(256).join(' ');
console.log(space.length); // 255
