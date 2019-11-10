// 聖杯模式(代理函式模式.代理建構式模式)，YUI 有類似的實作
function inherit(C, P) {
    var F = function () {
    };
    F.prototype = P.prototype;
    C.prototype = new F();
    C.uber = P.prototype;
    // 重設建構式的參考
    C.prototype.constructor = C;
}


// 優化的聖杯模式
var inherit = (function () {
    // 避免每次繼承都重新建立暫時(代理)建構式
    var F = function () {
    };
    return function (C, P) {
        F.prototype = P.prototype;
        C.prototype = new F();
        C.uber = P.prototype;
        C.prototype.constructor = C;
    };
}());
