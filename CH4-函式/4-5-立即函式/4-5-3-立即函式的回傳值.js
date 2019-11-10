var result = (function () {
    return 2 + 2;
}());

var result = (function () {
    return 2 + 2;
})();

var result = function () {
    return 2 + 2;
}();


var getResult = (function () {
    var res = 2 + 2;
    return function () {
        return res;
    };
}());


var o = {
    message: (function () {
        var what = 'call',
            who = 'me';
        return what + ' ' + who;
    }()),
    getMsg: function () {
        return this.message;
    }
};
// 用法
o.getMsg(); // "call me"
o.message; // "call me"
