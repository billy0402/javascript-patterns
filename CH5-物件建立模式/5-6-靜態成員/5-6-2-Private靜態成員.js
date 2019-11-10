var Gadget = (function () {
    // 靜態變數/屬性
    var counter = 0;

    // 回傳新的建構式實作
    return function () {
        counter += 1;
        console.log(counter);
    };
}()); // 立即執行

var g1 = new Gadget(); // logs 1
var g2 = new Gadget(); // logs 2
var g3 = new Gadget(); // logs 3


// 建構式
var Gadget = (function () {
    // 靜態變數/屬性
    var counter = 0,
        NewGadget;

    // 這會成為此建構式的新實作
    NewGadget = function () {
        counter += 1;
    };

    // 特權方法
    NewGadget.prototype.getLastId = function () {
        return counter;
    };

    // 覆寫原本的建構式
    return NewGadget;
}()); // 立即執行

var iphone = new Gadget();
iphone.getLastId(); // 1
var ipod = new Gadget();
ipod.getLastId(); // 2
var ipad = new Gadget();
ipad.getLastId(); // 3
