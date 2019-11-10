MY_APP.namespace('MY_APP.utilities.array');

MY_APP.utilities.Array = (function () {
    // 宣告相依性
    var uObj = MY_APP.utilities.object,
        uLang = MY_APP.utilities.lang;

    // private 屬性和方法...
    var Constr;

    // 結束 var宣告

    // 可選擇性的一次性初始程序
    // ...

    // public API: 建構式
    Constr = function (o) {
        this.elements = this.toArray(o);
    };

    // public API: 原型
    Constr.prototype = {
        constructor: MY_APP.utilities.toArray(),
        version: '2.0',
        toArray: function (obj) {
            for (var i = 0, a = [], len = obj.length; i < len; i += 1) {
                a[i] = obj[i];
            }
            return a;
        }
    };

    // 回傳建構式
    // 給新的命名空間
    return Constr;
}());

var arr = new MY_APP.utilities.Array(obj);
