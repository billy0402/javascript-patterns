// 這是函式表示式
// 作為參數傳遞給 callMe 函式
callMe(function () {
    // 我是個不具名的函式表示式
    // 也稱作匿名函式
});

// 這是具名函式表示式
callMe(function me() {
    // 我是個具名的函式表示式
    // 我的名字是 "me"
});

// 另一個函式表示式
var myObject = {
    say: function () {
        // 我是個函式表示式，存在於物件內
    }
};


// 函式宣告式的作用域
// 無法賦值給變數或屬性，或作為其他函式的參數

// 全域作用域
function foo() {
}

function local() {
    // 區域作用域
    function bar() {
    }

    return bar();
}
