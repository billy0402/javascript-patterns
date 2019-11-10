// 父建構式
function Parent(name) {
    this.name = name || 'Adam';
}

// 在原型中新增功能
Parent.prototype.say = function () {
    return this.name;
};

// 空的子建構式
function Child(name) {
}

// 繼承的魔法在這裡發生了，inherit 方法尚未實作
inherit(Child, Parent);
