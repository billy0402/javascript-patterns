var myApp = {};
myApp.color = 'green';
myApp.paint = function (node) {
    node.style.color = this.color;
};

var findNodes = function (callback) {
    // ...
    if (typeof callback === 'function') {
        callback(found);
    }
    // ...
};

// 會爆掉，this 會參考至全域物件，造成 this.color 未定義
findNodes(myApp.paint);


// 解決方法1: 除了傳遞回呼函式外，額外傳遞回呼函式所屬的物件
var findNodes = function (callback, callbackObj) {
    // ...
    if (typeof callback === 'function') {
        callback.call(callbackObj, found);
    }
    // ...
};

findNodes(myApp.paint, myApp);


// 解決方法2: 傳遞物件和方法作為回呼的選擇，是將方法用字串傳遞，這樣就不必重複物件兩次
var findNodes = function (callback, callbackObj) {
    if (typeof callback === 'string') {
        callback = callbackObj[callback]
    }

    // ...
    if (typeof callback === 'function') {
        callback.call(callbackObj, found);
    }
    // ...
};

findNodes('paint', myApp);
