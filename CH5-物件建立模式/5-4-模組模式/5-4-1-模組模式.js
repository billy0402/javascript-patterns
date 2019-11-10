// 模組模式 (module pattern):
// 命名空間 + 立即函式 + Private 成員和特權方法 + 宣告相依性
var MY_APP = {};

// 命名空間
MY_APP.namespace('MY_APP.utilities.array');

// 定義模組
MY_APP.utilities.array = (function () {
        // 宣告相依性
    var uObj = MY_APP.utilities.object,
        uLang = MY_APP.utilities.lang,

        // private 屬性
        arrayString = '[object Array]',
        ops = Object.prototype.toString;

        // private 方法
        // ...
        // 結束 var 宣告

    // 可選擇的一次性初始程序
    // ...

    // public API
    return {
        isArray: function (a) {
            return ops.call(a) === arrayString;
        },

        inArray: function (hayStack, needle) {
            for (var i = 0, max = hayStack.length; i < max; i += 1) {
                if (hayStack[i] === needle) {
                    return true;
                }
            }
        }
        // 更多其他方法和屬性
        // ...
    };
}());
