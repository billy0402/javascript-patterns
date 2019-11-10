// 鏈接模式 (chaining pattern)
var obj = {
    value: 1,
    increment: function () {
        this.value += 1;
        return this;
    },
    add: function (v) {
        this.value += v;
        return this;
    },
    shout: function () {
        alert(this.value);
    }
};

// 鏈接這些方法呼叫
obj.increment().add(3).shout(); // 5

// 相對的，逐一呼叫它們
obj.increment();
obj.add(3);
obj.shout(); // 5


/*
 * 優點:
 * 1. 產生較精簡的程式碼，甚至讀起來像普通的句子
 * 2. 幫助思考能不能切割函式，建立更小更專門的函式，而不是做太多工作的函式
 * 缺點:
 * debug 時變得困難，錯誤發生在同一行，卻不知道錯在哪一個方法
 *
 * 廣泛運用於 jQuery 函式庫，例如 DOM 的 API:
 * document.getElementsByTagName('head')[0].appendChild(newNode);
 */
