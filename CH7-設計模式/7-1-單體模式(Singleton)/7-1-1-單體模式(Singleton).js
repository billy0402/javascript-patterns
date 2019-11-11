/*
 * 單體模式 (Singleton):
 * 讓特定的 class 只有唯一一個實體。
 * 當第二次使用同一個 class 建立新物件，會得到和第一次建立時同一個物件。
 *
 * JavaScript 的 Singleton 其實是指模組模式 (5-4)
 */

var obj = {
    myProp: 'my value'
};

var obj2 = {
    myProp: 'my value'
};

// 在 JavaScript，除非同一個物件，否則物件之間不可能相等，即使物件長得一樣
obj === obj2; // false
obj == obj2; // false
