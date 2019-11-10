function Gadget() {
    // private 成員
    var name = 'iPod';

    // public 方法
    this.getName = function () {
        return name;
    };
}

Gadget.prototype = (function () {
    // private 成員
    var browser = 'Mobile Webkit';

    // public 的 prototype 成員
    return {
        getBrowser: function () {
            return browser;
        }
    };
}());

var toy = new Gadget();
console.log(toy.getName());    // 自己 的特權方法
console.log(toy.getBrowser()); // prototype 的特權方法
