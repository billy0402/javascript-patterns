// 使用額外的匿名立即函式來建立 closure
var myObj; // 這個是準備要建立的物件
(function () {
    // private 成員
    var name = 'my, oh my';

    // 實作 public 的部分
    // 注意！不要使用 var
    myObj = {
        // 特權方法
        getName: function () {
            return name;
        }
    }
}());

myObj.getName(); // "my, oh my"


// 模組模式
var myObj = (function () {
    // private 成員
    var name = 'my, oh my';

    // 實作 public 的部分
    return {
        getName: function () {
            return name;
        }
    };
}());

myObj.getName(); // "my, oh my"
