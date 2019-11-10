// 建立一個物件
var man = {
    hands: 2,
    legs: 2,
    heads: 1
};

// 在程式碼的別處，一個方法被加入到所有物件中
if (typeof Object.prototype.clone === 'undefined') {
    Object.prototype.clone = function () {
    };
}


// 方法1: for-in 迴圈
for (var i in man) {
    if (man.hasOwnProperty(i)) { // 過濾
        console.log(i, ':', man[i]);
    }
}
/*
 * console 中的結果
 * hands : 2
 * legs : 2
 * heads : 1
 */

// 方法1反模式: (不檢查 hasOwnProperty 的 for-in 迴圈)
for (var i in man) {
    console.log(i, ':', man[i]);
}
/*
 * console 中的結果
 * hands : 2
 * legs : 2
 * heads : 1
 * clone : function ()
 */


// 方法2: hasOwnProperty 透過 Object.prototype 呼叫 (可以避免命名衝突)
for (var i in man) {
    if (Object.prototype.hasOwnProperty.call(man, i)) { // 一樣是過濾
        console.log(i, ':', man[i]);
    }
}

// 避免太長的屬性參考，改用區域變數快取它
var i,
    hasOwn = Object.prototype.hasOwnProperty;
for (i in man) {
    if (hasOwn.call(man, i)) { // 過濾
        console.log(i, ':', man[i]);
    }
}

// 去除大括號，減少縮排，閱讀佳 (警告: JSLint 不會通過)
var i,
    hasOwn = Object.prototype.hasOwnProperty;
for (i in man) if (hasOwn.call(man, i)) {
    console.log(i, ':', man[i]);
}
