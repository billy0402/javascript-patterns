var zero = 0;
// === & !== 比較型別跟值 (嚴格比較)
// JSLint 要求使用嚴格比較
if (zero === false) {
    // 不會執行，因為 zero 是 0，不是 false
}

// 反模式 (== 會隱含的自動轉型)
if (zero == false) {
    // 這個區塊會執行
}
