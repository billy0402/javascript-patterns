// ES5
// var newFunc = obj.someFunc.bind(myObj, 1, 2, 3);

// before ES5 實作 Function.prototype.bind()
if (typeof Function.prototype.bind === 'undefined') {
    Function.prototype.bind = function (thisArg) {
        var fn = this,
            slice = Array.prototype.slice,
            // 繼承物件時帶有的參數
            args = slice.call(arguments, 1);

        return function () {
            // 呼叫方法時帶有的參數
            return fn.apply(thisArg, args.concat(slice.call(arguments)));
        }
    }
}

var one = {
    name: 'object',
    say: function (greet) {
        return greet + ', ' + this.name;
    }
};

var two = {
    name: 'anther object'
};

var twoSay2 = one.say.bind(two);
twoSay2('Bonjour'); // "Bonjour, anther object"

var twoSay3 = one.say.bind(two, 'Enchanté');
twoSay3(); // "Enchanté, anther object"
