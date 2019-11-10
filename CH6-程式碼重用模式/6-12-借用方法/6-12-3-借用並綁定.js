var one = {
    name: 'object',
    say: function (greet) {
        return greet + ', ' + this.name;
    }
};

// 試用
one.say('hi'); // "hi, object"


var two = {
    name: 'anther object'
};

one.say.apply(two, ['hello']); // "hello, anther object"


// 將方法指定給一個變數，方法內的 this 將會指向全域物件
var say = one.say;
say('hoho'); // "hoho, undefined"

// 將方法作為回呼傳遞
var yetAnother = {
    name: 'Yet another object',
    method: function (callback) {
        return callback('Hola');
    }
};
yetAnother.method(one.say); // "Hola, undefined"


function bind(o, m) {
    // 代價僅一個額外的 closure
    return function () {
        return m.apply(o, [].slice.call(arguments));
    };
}

var twoSay = bind(two, one.say);
twoSay('yo'); // yo, anther object
