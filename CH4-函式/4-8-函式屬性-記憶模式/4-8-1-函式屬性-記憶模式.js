function func(a, b, c) {
}

console.log(func.length); // 3


// 記憶模式 (memoization mode): 快取函式結果
var myFunc = function (param) {
    if (!myFunc.cache[param]) {
        var result = {};
        // 繁重的運算...
        myFunc.cache[param] = result;
    }

    return myFunc.cache[param];
};

// 快取的存儲
myFunc.cache = {};


// 複雜的參數，改用參數序列化
// 物件識別會消失，不同物件相同屬性，會共用快取項目
var myFunc = function () {
    var cacheKey = JSON.stringify(Array.prototype.slice.call(arguments)),
        result;

    if (!myFunc.cache[cacheKey]) {
        result = {};
        // 繁重的運算...
        myFunc.cache[cacheKey] = result;
    }

    return myFunc.cache[cacheKey];
};

// 快取的存儲
myFunc.cache = {};


// 使用 arguments.callee 參考至函式，替代直接寫死函式名稱
// (ES5 嚴苛模式不允許)
var myFunc = function (param) {
    var func = arguments.callee,
        result;

    if (!func.cache[param]) {
        result = {};
        // 繁重的運算...
        func.cache[param] = result;
    }

    return func.cache[param];
};

// 快取的存儲
myFunc.cache = {};
