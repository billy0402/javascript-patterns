(function (who, when) {
    console.log('I met ' + who + ' on ' + when);
}('Joe Black', new Date()));
// I met Joe Black on Sat Oct 19 2019 16:34:11 GMT+0800 (Taipei Standard Time)


// 全域物件會作為參數傳遞給立即函式，於是函式內部就可以存取，而不必使用 window 物件
// 使得程式碼在瀏覽器以外的環境中更有交互操作性
(function (global) {
    // 透過 global 存取全域物件
}(this));
// 不該傳遞太多變數給立即函式，因為容易造成理解的負擔，必須閱讀整份程式碼才能理解函式如何運作
