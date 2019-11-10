// 建構式
var Gadget = function () {
};

// 一個靜態方法
Gadget.isShiny = function () {
    return 'you bet';
};

// 加在原型中的一般方法
Gadget.prototype.setPrice = function (price) {
    this.price = price;
};


// 呼叫一個靜態方法
Gadget.isShiny(); // "you bet"

// 建立一個實體，然後呼叫方法
var iphone = new Gadget();
iphone.setPrice(500);


typeof Gadget.setPrice; // "undefined"
typeof iphone.isShiny;  // "undefined"


// 讓靜態方法也能透過實體來使用
Gadget.prototype.isShiny = Gadget.isShiny;
iphone.isShiny(); // "you bet"
// Gadget.isShiny() 內的 this 指向 Gadget
// iphone.isShiny() 內的 this 指向 iphone


// 建構式
var Gadget = function (price) {
    this.price = price;
};

// 一個靜態方法
Gadget.isShiny = function () {
    // 這裡永遠可以運作
    var msg = 'you bet';

    if (this instanceof Gadget) {
        // 這裡只有當使用非靜態方式呼叫才有作用
        msg += ', it cost $' + this.price + '!';
    }

    return msg;
};

// 將一個一般的方法加入至原型
Gadget.prototype.isShiny = function () {
    return Gadget.isShiny.call(this);
};

// 測試呼叫靜態方法
Gadget.isShiny(); // "you bet"

// 測試一個實體，用非靜態方式呼叫方法
var a = new Gadget('499.99');
a.isShiny(); // "you bet, it cost $499.99!"
