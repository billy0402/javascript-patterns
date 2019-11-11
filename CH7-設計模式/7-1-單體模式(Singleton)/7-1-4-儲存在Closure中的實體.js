function Universe() {
    // 快取的實體
    var instance = this;

    // 用一般方法繼續
    this.startTime = 0;
    this.bang = 'Big';

    // 重新定義建構式
    Universe = function () {
        // 第一次: 回傳 this
        // 第二次以後: 取得 private 的 instance 並回傳
        return instance;
    };
}

// 試試看
// var uni = new Universe();
// var uni2 = new Universe();
// uni === uni2; // true


// 新增屬性至原型
Universe.prototype.nothing = true;
var uni = new Universe();
// 在建立初始物件之後，再次新增屬性至原型
Universe.prototype.everything = true;
var uni2 = new Universe();

// 只有一開始的原型有連接到物件上
uni.nothing; // true
uni2.nothing; // true
uni.everything; // undefined
uni2.everything; // undefined

// 這樣聽起來蠻正確的
uni.constructor.name; // "Universe"
// 但這就奇怪了，因為 uni.constructor 仍指向原本的建構式，而不是重新定義的那一個
uni.constructor === Universe; // false


function Universe() {
    // 快取的實體
    var instance = this;

    // 重新定義建構式
    Universe = function () {
        return instance;
    };

    // 帶上原型屬性
    Universe.prototype = this;

    // 建立實體
    instance = new Universe();

    // 重設建構式指標
    instance.constructor = Universe;

    // 建立功能
    this.startTime = 0;
    this.bang = 'Big';

    return instance;
}

// 更新原型接著建立實體
Universe.prototype.nothing = true;
var uni = new Universe();
Universe.prototype.everything = true;
var uni2 = new Universe();

// 確實是相同的實體
uni === uni2; // true

// 所有的原型屬性都有效
// 不論它們是什麼時候定義的
uni.nothing && uni.everything && uni2.nothing && uni2.everything; // true
// 一般屬性可運作
uni.bang; // "Big"
// 建構式指標也正確
uni.constructor === Universe; // true


var Universe;

(function () {
    var instance;

    Universe = function Universe() {
        if (instance) {
            return instance;
        }

        instance = this;

        // 建立所有的功能
        this.startTime = 0;
        this.bang = 'Big';
    }
}());
