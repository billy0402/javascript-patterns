function writeCode(callback) {
    // 做些事情
    callback();
    // ...
}

function introduceBugs() {
    // 製造一些 bugs
}

// 函式 不加括號 -> 當作參數傳遞
// 函式 加上括號 -> 執行函式
writeCode(introduceBugs);
