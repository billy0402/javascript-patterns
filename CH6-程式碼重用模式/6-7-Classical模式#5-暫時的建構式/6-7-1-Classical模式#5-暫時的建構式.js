function inherit(C, P) {
    // 父子建構式的代理 (proxy)
    var F = function () {
    };
    F.prototype = P.prototype;
    C.prototype = new F();
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

var kid = new Child();
kid.name; // "undefined"，子物件本身的 name 屬性
kid.say(); // "undefined"，呼叫 Parent 原型的 say() 方法
