var Parent = function () {
};

var parent = new Parent();

var child = Object.create(parent);


var child = Object.create(parent, {
    age: {value: 2} // ECMA5 表示符
});

child.hasOwnProperty('age'); // true


// YUI3 的 Y.Object() 方法
YUI().use('*', function (Y) {
    var child = Y.Object(parent);
});
