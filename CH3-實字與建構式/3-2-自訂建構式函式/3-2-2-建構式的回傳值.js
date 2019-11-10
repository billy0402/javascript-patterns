var ObjectMaker = function () {
    // 這個 name 屬性會被忽略
    // 因為建構式決定回傳另一個物件
    this.name = 'This is it.';

    // 建立並回傳一個新物件
    var that = {};
    that.name = 'And that is that.';
    return that;
    // return true; // 回傳非物件會被忽略
};

// 測試
var obj = new ObjectMaker();
console.log(obj.name); // "And that is that."
