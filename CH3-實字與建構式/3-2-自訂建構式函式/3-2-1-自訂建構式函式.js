var Person = function (name) {
    this.name = name;
    this.say = function () {
        return 'I am ' + this.name;
    };
};

// 建構式幕後發生的事情
var Person = function (name) {
    // 使用物件實字建立一個空物件，繼承 Person 的原型
    // var this = Object.create(Person.prototype);

    // 加入屬性和方法
    this.name = name;
    this.say = function () {
        return 'I am ' + this.name;
    };

    // return this;
};

// 避免每個實體各自建立新函式在記憶體
// 可重複利用的成員 (方法)，都應該放進原型裡
Person.prototype.say = function (name) {
    return 'I am ' + this.name;
};

var adam = new Person('Adam');
adam.say(); // "I am Adan"
