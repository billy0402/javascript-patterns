function inherit(C, P) {
    var F = function () {
    };
    F.prototype = P.prototype;
    C.prototype = new F();
    // uber: super 是保留字，superclass 會讓開法者誤以為 JavaScript 是有 class 的
    C.uber = P.prototype;
}

// 父子建構式和繼承
function Parent() {
}

Parent.prototype.say = function () {
    return this.name;
};

function Child() {
}

inherit(Child, Parent);

// 試試水溫
var kid = new Child();
kid.constructor.name; // "Parent"
kid.constructor === Parent; // true

/*
 * constructor 屬性:
 * 1. 檢查物件
 * 2. 重新設定指向預期中的建構式，而不會影響功能，因為這個屬性幾乎僅用來提供資訊
 */

