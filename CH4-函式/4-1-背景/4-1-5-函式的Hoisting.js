// 反模式
// 只是為了說明

// 全域函式
function foo() {
    alert('global foo');
}

function bar() {
    alert('global bar');
}

function hoistMe() {
    console.log(typeof foo); // "function"
    console.log(typeof bar); // "undefined"

    foo(); // "local foo"
    bar(); // Uncaught TypeError: bar is not a function

    // 函式宣告式
    // 變數 'foo' 和它的實作都被提升至最前面
    function foo() {
        alert('local foo');
    }

    // 函式表示式
    // 只有變數 'bar' 被提升，不包括實作
    var bar = function () {
        alert('local bar');
    };
}

hoistMe();
