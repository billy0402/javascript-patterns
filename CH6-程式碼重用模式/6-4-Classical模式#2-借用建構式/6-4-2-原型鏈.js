// 父建構式
function Parent(name) {
    this.name = name || 'Adam';
}

// 在原型中新增功能
Parent.prototype.say = function () {
    return this.name;
};

// 子建構式
function Child(name) {
    Parent.apply(this, arguments);
}

var kid = new Child('Patrick');
kid.name; // "Patrick"
typeof kid.say; // "undefined"，原型鏈被破壞
