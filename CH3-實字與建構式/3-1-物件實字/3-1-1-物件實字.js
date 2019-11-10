// 由空物件開始
var dog = {};
// 增加一個屬性
dog.name = 'Benji';
// 再增加一個方法
dog.getName = function () {
    return dog.name;
};

// 改變屬性或方法的值
dog.getName = function () {
    // 重新定義該函式，會回傳一個寫死的值
    return 'Fido';
};

// 移除屬性或方法
delete dog.name;

// 增加更多屬性或方法
dog.say = function () {
    return 'Woof!';
};
dog.fleas = true;


// 物件實字模式
var dog = {
    name: 'Benji',
    getName: function () {
        return this.name;
    }
};
