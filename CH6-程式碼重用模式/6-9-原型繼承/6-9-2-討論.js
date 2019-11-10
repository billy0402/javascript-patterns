function object(o) {
    function F() {
    }

    F.prototype = o;
    return new F();
}


// 父建構式
function Person() {
    // 一個 自己的 屬性
    this.name = 'Adam';
}

// 在原型中新增了一個屬性
Person.prototype.getName = function () {
    return this.name;
};

// 建立新的 Persons
var papa = new Person();


// 繼承
var kid = object(papa);
// 測試自身屬性和來自原型的屬性是不是都被繼承
kid.getName(); // "Adam"


// 只繼承父原型
var kid = object(Person.prototype);
typeof kid.getName; // "function"，因為他在原型裡面
typeof kid.name; // "undefined"，因為只有原型被繼承了
