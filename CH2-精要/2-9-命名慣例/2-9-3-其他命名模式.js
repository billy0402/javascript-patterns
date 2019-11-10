// 常數.全域變數: 全大寫
// 這是貴重的常數，請不要碰它
var PI = 3.14,
    MAX_WIDTH = 800;

// private: 底線開頭
// JSLint (nomen)
var person = {
    getName: function () { // public
        return this._getFirst() + ' ' + this._getLast();
    },
    _getFirst: function () { // private
        // ...
    },
    _getLast: function () { // private
        // ...
    }
};

/*
 * _private規範的變化:
 * 底線尾巴: name_, getElements_()
 * 一個底線: _protected, 兩個底線: __private
 * Firefox 內部屬性 (前後兩個底線): __proto__ 和 __parent__
 */
