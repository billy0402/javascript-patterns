/*
 * 原始型態
 * 數值
 * 字串
 * 布林
 * null
 * undefined
 */

/*
 * 原始型態包裹物件 (primitive wrapper object) 建構式
 * Number()
 * String()
 * Boolean()
 */

// 一個原始數值
var n = 100;
console.log(typeof n);
// "number"

// 一個數值物件
var nObj = new Number(100);
console.log(typeof nObj);
// "object"


// 一個原始字串可以當成 string 物件來使用
var s = 'hello';
console.log(s.toUpperCase());
// "HELLO"

// 字串本身也可以像是個物件般運做
console.log('monkey'.slice(3, 6));
// "key"

// 數值也是一樣
console.log((22 / 7).toPrecision(3));
// "3.14"


// 避免使用這些
var s = new String('my string');
var n = new Number(101);
var b = new Boolean(true);

// 這些更好又更簡單
var s = 'my string';
var n = 101;
var b = true;


// 原始字串
var greet = 'Hello there';

// 原始字串被轉型成物件，以使用 split() 方法
console.log(greet.split(' ')[0]);
// "Hello"

// 企圖擴充原始型別不會產生錯誤
greet.smile = true;

// 但其實沒有用
console.log(greet.smile);
// "undefined"

// 改用包裹物件建構式，成功擴充並保持狀態
var greet = new String('Hello there');
console.log(greet.split(' ')[0]);
// "Hello"
greet.smile = true;
console.log(greet.smile);
// true


// 不使用 new 呼叫，包裹物件建構式會使用建構式產生對應的原始型別
console.log(typeof Number(1)); // "number"
console.log(typeof Number('1')); // "number"
console.log(typeof Number(new Number())); // "number"
console.log(typeof String(1)); // "string"
console.log(typeof Boolean(1)); // "boolean"
