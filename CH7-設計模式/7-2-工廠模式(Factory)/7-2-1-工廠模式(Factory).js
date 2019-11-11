/*
 * 工廠模式 (Factory):
 * 建立物件，通常作為一個 class 或 class 的一個靜態方法
 * 1. 對於建立相似的物件進行重複性的運作
 * 2. 提供 factory 的客戶一個建立物件的方法，且無需在編譯時期知道明確的型態 (class)
 */

// 父建構式
function CarMaker() {
}

// 父建構式的一個方法
CarMaker.prototype.drive = function () {
    return "Vroom, I have " + this.doors + " doors";
};

// 靜態的 factory 方法
CarMaker.factory = function (type) {
    var constr = type,
        nerCar;

    // 若建構式不存在則拋出錯誤
    if (typeof CarMaker[constr] !== 'function') {
        throw {
            name: 'Error',
            message: constr + "doesn't exist"
        };
    }

    // 到這裡時，我們已經知道建構式存在了
    // 我們讓它繼承父建構式，但僅此一次
    if (typeof CarMaker[constr].prototype.drive !== 'function') {
        CarMaker[constr].prototype = new CarMaker();
    }

    // 建立新實體
    nerCar = new CarMaker[constr]();

    // 選擇性的呼叫一些方法，然後回傳
    return nerCar;
};

// 定義具體的 car maker
CarMaker.Compact = function () {
    this.doors = 4;
};
CarMaker.Convertible = function () {
    this.doors = 2;
};
CarMaker.SUV = function () {
    this.doors = 17;
};

var corolla = CarMaker.factory('Compact');
var solstice = CarMaker.factory('Convertible');
var cherokee = CarMaker.factory('SUV');
corolla.drive(); // "Vroom, I have 4 doors"
solstice.drive(); // "Vroom, I have 2 doors"
cherokee.drive(); // "Vroom, I have 17 doors"
