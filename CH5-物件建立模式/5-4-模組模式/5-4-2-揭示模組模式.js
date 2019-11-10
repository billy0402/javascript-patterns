MY_APP.utilities.array = (function () {
        // private 屬性
    var arrayString = '[object Array]',
        ops = Object.prototype.toString,

        // private 方法
        isArray = function (a) {
            return ops.call(a) === arrayString;
        },
        inArray = function (hayStack, needle) {
            for (var i = 0, max = hayStack.length; i < max; i += 1) {
                if (hayStack[i] === needle) {
                    return true;
                }
            }
        };
    // 結束 var 宣告

    // 揭露為 public API
    return {
        isArray: isArray,
        indexOf: inArray
    };
}());
