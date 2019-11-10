// 定義一個函式
var sayHi = function (who) {
    return 'Hello' + (who ? ', ' + who : '') + '!';
};

// 呼叫函式
sayHi(); // Hello!
sayHi('world'); // Hello, world!

// 應用函式 (function application)
// 第一個參數為物件，用來綁定函式內部的 this，如果為 null 會指向全域物件
// 第二個參數為參數陣列，會產生函式內部可使用的 arguments 類陣列物件
sayHi.apply(null, ['Hello']); // Hello, Hello!


var alien = {
    sayHi: function (who) {
        return 'Hello' + (who ? ', ' + who : '') + '!';
    }
};

alien.sayHi('world'); // Hello, world!
// 函式內部的 this 指向 alien
sayHi.apply(alien, ['humans']); // Hello, humans!


// call 在只有一個參數時，效能較高，省下一個陣列
sayHi.apply(alien, ['humans']); // Hello, humans!
sayHi.call(alien, 'humans'); // Hello, humans!
