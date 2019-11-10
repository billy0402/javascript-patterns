// 實作 klass() (仿 class) 函式
// 繼承用的父 class, 新 class 的實作(仿 PHP)
var klass = function (Parent, props) {
    var Child, F, i;

    // 新的建構式
    Child = function () {
        // 父類別初始化
        if (Child.uber && Child.uber.hasOwnProperty('__construct')) {
            Child.uber.__construct.apply(this, arguments);
        }
        // 子類別初始化
        if (Child.prototype.hasOwnProperty('__construct')) {
            Child.prototype.__construct.apply(this, arguments);
        }
    };

    // 繼承 (聖杯模式)
    Parent = Parent || Object;
    F = function () {
    };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.uber = Parent.prototype;
    Child.prototype.constructor = Child;

    // 加入實作方法
    for (i in props) {
        if (props.hasOwnProperty(i)) {
            Child.prototype[i] = props[i];
        }
    }

    // 回傳 class
    return Child;
};


var Man = klass(null, {
    __construct: function (what) {
        console.log("Man's constructor");
        this.name = what;
    },
    getName: function () {
        return this.name;
    }
});

var first = new Man('Adam'); // logs "Man's constructor"
first.getName(); // "Adam"


// extend 擴充或繼承
var SuperMan = klass(Man, {
    __construct: function (what) {
        console.log("SuperMan's constructor");
    },
    getName: function () {
        var name = SuperMan.uber.getName.call(this);
        return 'I am ' + name;
    }
});

var clark = new SuperMan('Clark Kent');
// logs "Man's constructor"
// logs "SuperMan's constructor"
clark.getName(); // "I am Clark Kent"
clark instanceof Man; // true
clark instanceof SuperMan; // true
