function Waffle() {
    // 檢查實體 (寫死建構式名稱)
    if (!(this instanceof Waffle)) {
        return new Waffle();
    }

    // 檢查實體 (泛用，ES5 嚴格模式禁用)
    // if (!(this instanceof arguments.callee)) {
    //     return new arguments.callee;
    // }

    this.tastes = 'yummy';
}
Waffle.prototype.wantAnother = true;

// 測試呼叫
var first = new Waffle(),
    second = Waffle();

console.log(first.tastes); // "yummy"
console.log(second.tastes); // "yummy"

console.log(first.wantAnother); // true
console.log(second.wantAnother); // true
