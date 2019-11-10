// method() 方法實作
if (typeof Function.prototype.method !== 'function') {
    // 新方法的名稱, 新方法的實作
    Function.prototype.method = function (name, implementation) {
        this.prototype[name] = implementation;
        return this;
    };
}

// 用 method() 語法糖 定義 class
var Person = function (name) {
    this.name = name;
}
    .method('getName', function () {
        return this.name;
    })
    .method('setName', function (name) {
        this.name = name;
        return this; // 鏈接模式
    });

var a = new Person('Adam');
a.getName(); // "Adam"
a.setName('Eve').getName(); // "Eve"
