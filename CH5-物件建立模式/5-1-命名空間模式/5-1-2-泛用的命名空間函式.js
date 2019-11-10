// 不安全
var MY_APP = {};

// 這樣比較好
if (typeof MY_APP === 'undefined') {
    var MY_APP = {};
}
// 或者更短些
var MY_APP = MY_APP || {};


MY_APP.namespace = function (nsString) {
    var parts = nsString.split('.'),
        parent = MY_APP,
        i;

    // 去除掉最前頭多餘的全域名稱
    if (parts[0] === 'MY_APP') {
        parts = parts.slice(1);
    }

    for (i = 0; i < parts.length; i += 1) {
        // 如果屬性不存在則建立
        if (typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};

// 使用命名空間函式
MY_APP.namespace('MY_APP.modules.module2');

// 效果等同
var MY_APP = {
    modules: {
        module2: {}
    }
};

// 將回傳值指派給區域變數
var module2 = MY_APP.namespace('MY_APP.modules.module2');
console.log(module2 === MY_APP.modules.module2); // true

// 忽略開頭的 MY_APP
MY_APP.namespace('modules.module2');

// 很長命名空間
MY_APP.namespace('once.upon.a.time.there.was.this.long.nested.property');
