console.log(typeof [1, 2]); // "object"

console.log([].length !== undefined); // true
console.log([].slice() !== undefined); // true
console.log([] instanceof Array); // true


// ES5 的新方法
console.log(Array.isArray([])); // true

// 試著一個很像陣列的物件來欺騙檢查
console.log(
    Array.isArray({
        '0': 1,
        length: 1,
        slince: function () {
        }
    })
); // false


// 如果環境不支援 isArray()
Array.isArray = undefined;

if (typeof Array.isArray === 'undefined') {
    Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

console.log(Array.isArray([])); // true
