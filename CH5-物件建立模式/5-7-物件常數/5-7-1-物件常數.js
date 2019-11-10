// JavaScript 內建物件常數
Math.PI; // 3.141592653589793
Math.SQRT2; // 1.4142135623730951
Number.MAX_VALUE; // 1.7976931348623157e+308


// 建構式
var Widget = function () {
    // 實作...
};

// constants
Widget.MAX_HEIGHT = 320;
Widget.MAX_WIDTH = 480;


var constant = (function () {
    var constants = {},
        ownProp = Object.prototype.hasOwnProperty,
        allowed = {
            string: 1,
            number: 1,
            boolean: 1
        },
        prefix = (Math.random() + '_').slice(2);

    return {
        // 檢查某個常數是否存在
        isDefined: function (name) {
            return ownProp.call(constants, prefix + name);
        },
        // 用來定義一個新的常數
        set: function (name, value) {
            if (this.isDefined(name)) {
                return false;
            }
            if (!ownProp.call(allowed, typeof value)) {
                return false;
            }
            constants[prefix + name] = value;
            return true;
        },
        // 取得常數的值
        get: function (name) {
            if (this.isDefined(name)) {
                return constants[prefix + name];
            }
            return null;
        }
    };
}());

// 檢查是否定義過
constant.isDefined('MAX_WIDTH'); // false
// 定義常數
constant.set('MAX_WIDTH', 480); // true
// 再檢查一遍
constant.isDefined('MAX_WIDTH'); // true
// 嘗試重新定義
constant.set('MAX_WIDTH', 320); // false
// 值是否原封不動呢?
constant.get('MAX_WIDTH'); // 480
