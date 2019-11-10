// 修改前(反模式): 5個全域變數
// 建構式
function Parent() {
}

function Child() {
}

// 一個變數
var someVar = 1;

// 一些物件
var module1 = {};
module1.data = {a: 1, b: 2};
var module2 = {};


// 修改後: 1個全域變數
// 全域物件
var MY_APP = {};

// 建構式
MY_APP.Parent = function () {
};
MY_APP.Child = function () {
};

// 一個變數
MY_APP.someVar = {};

// 一個物件容器
MY_APP.modules = {};

// 巢狀物件
MY_APP.modules.module1 = {};
MY_APP.modules.module1.data = {a: 1, b: 2};
MY_APP.modules.module2 = {};

/*
 * 命名空間 (namespace)
 * 優點:
 * 避免命名衝突
 *
 * 缺點:
 * 得多打一些字：他相當於在每個變數和函式之前加上前綴，確實增加了需要的下載量
 * 唯一的全域實體代表著任何一段程式碼都可以變更這個實體，而接著所有其他的功能也都會使用變更後的狀態
 * 越長的巢狀名稱表示更長.更慢的屬性名稱查詢
 */
