var myFunction = function () {
    // 參考
    var dom = YAHOO.util.Dom,     // DOM 模組
        event = YAHOO.util.Event; // 事件模組


    // 函式接下來的部分
    // 使用變數 event 和 dom ...
};

/*
 * 優點:
 * 明確地宣告相依性，必須確定某幾個檔案必須要引用
 * 在函式頂端的前期宣告，容易找到並解決相依性
 * 使用區域變數 (dom) 永遠比使用全域變數 (YAHOO) 來得快，更不用說全域變數的巢狀屬性 (YAHOO.util.Dom)
 * YUICompressor 和 Google Closure compiler 等進階的最小化工具會重新命名區域變數 (dom -> A)，產生較小的程式碼，
 * 但他們不會去更改全域變數的名稱，因為不安全
 */


function test1() {
    alert(MY_APP.modules.m1);
    alert(MY_APP.modules.m2);
    alert(MY_APP.modules.m51);
}

/*
 * 最小化後的 test1 主體:
 * alert(MY_APP.modules.m1);alert(MY_APP.modules.m2);alert(MY_APP.modules.m51)
 */

function test2() {
    var modules = MY_APP.modules;
    alert(modules.m1);
    alert(modules.m2);
    alert(modules.m51);
}

/*
 * 最小化後的 test2 主體:
 * var a = MY_APP.modules;alert(a.m1);alert(a.m2);alert(a.m51)
 */
