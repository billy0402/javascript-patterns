// 父建構式
function Parent(name) {
    this.name = name || 'Adam';
}

// 在原型中新增功能
Parent.prototype.say = function () {
    return this.name;
};

// 子建構式
function Child(a, b, c, d) {
    // 複製父物件的屬性
    Parent.apply(this, arguments);
}

// 參考父原型鏈
Child.prototype = new Parent();

var kid = new Child('Patrick');
kid.name; // "Patrick"
kid.say(); // "Patrick"
delete kid.name;
kid.say(); // "Adam"


/*
 * 缺點:
 * 1. 父建構式被呼叫了兩次，效率較差
 * 2. 自身屬性(本例中為 name)被繼承了兩次
 */
