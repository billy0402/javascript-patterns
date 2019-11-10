function object(o) {
    function F() {
    }

    F.prototype = o;
    return new F();
}

// 要繼承的物件
var parent = {
    name: 'Papa'
};

// 新的物件
var child = object(parent);

// 測試
alert(child.name); // "Papa"
