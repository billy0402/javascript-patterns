/*
 * 立即函式模式 (immediate function pattern)
 * 別稱: 自我調用 (self-invoking).自我執行 (self-executing)
 * 用函式表示式來定義函式 (不能用函式宣告式)
 * 在函式最後加上一組括號，會讓函式立刻執行
 * 將整個函式包在括號裡 (如果不將函式賦值給一個變數才需要)
 */

// JSLint 推薦
(function () {
    alert('watch out!')
}());

(function () {
    alert('watch out!')
})();


// 如果沒有包在立即函式裡，days.today.msg 會變成全域變數，在初始後殘留下來
(function () {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        today = new Date(),
        msg = 'Today is ' + days[today.getDay()] + ', ' + today.getDate();
    alert(msg); // "Today is Sat, 19"
}());
