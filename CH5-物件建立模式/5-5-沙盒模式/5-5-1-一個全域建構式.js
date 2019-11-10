new Sandbox(function (box) {
    // 你的程式碼在這裡...
});


// 忽略 new，並用一些虛構的模組來建立物件
Sandbox(['ajax', 'dom'], function (box) {
    console.log(box);
});

// 模組名稱拆成個別的參數來傳遞
Sandbox('ajax', 'dom', function (box) {
    console.log(box);
});


// '*' 代表使用所有可用的模組
Sandbox('*', function (box) {
    console.log(box);
});

// 沒指定也代表使用所有可用模組
Sandbox(function (box) {
    console.log(box);
});


// 多次實體化.巢狀化沙盒物件
Sandbox('dom', 'event', function (box) {
    // 使用 dom 和 event 模組

    Sanbox('ajax', function (box) {
        // 另一個沙盒的 box 物件
        // 這個 box 和外面的那個 box 是不同的
        // ...
    });

    // 這裡不會有任何 ajax 模組的痕跡
});
