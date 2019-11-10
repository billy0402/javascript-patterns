// 建構式
function Waffle() {
    this.tastes = 'yummy';
}

// 一個新物件
var goodMorning = new Waffle();
console.log(typeof goodMorning); // "object"
console.log(goodMorning.tastes); // "yummy"

// 反模式: 忘了 new
var goodMorning = Waffle();
console.log(typeof goodMorning); // "undefined"
console.log(window.tastes); // "yummy"
