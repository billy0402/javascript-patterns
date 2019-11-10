/*
 * 優點: 必定回傳一個物件
 * 缺點: 失去與原型的連結
 */

function Waffle() {
    // that 只是命名慣例，也可以使用 self 或 me
    var that = {};
    that.tastes = 'yummy';
    return that;
}

function Waffle() {
    return {
        tastes: 'yummy'
    };
}

var first = new Waffle(),
    second = Waffle();
console.log(first.tastes);
console.log(second.tastes);
