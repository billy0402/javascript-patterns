function inherit(C, P) {
    C.prototype = new P;
}

inherit(Child, Parent);


var kid = new Child();
kid.say(); // "Adam"

kid.name = 'Patrick';
kid.say(); // "Patrick"

delete kid.name;
kid.say(); // "Adam"


/*
 * 缺點:
 * 1. 你同時繼承了加在 this 上本身的屬性和原型的屬性，大多時候你並不想要本身的屬性，因為它們比較像是屬於特定實體的，並不適合重用
 *    (關於建構是有個通用的基本原則，是可重用的成員都應放在 "原型" 裡)
 * 2. 它不能讓你傳遞參數給子建構式，再讓子建構式傳遞給父建構式
 *    (解法: 每次需要新的子物件時，執行一次繼承，建立父物件，效率很差)
 */

// 缺點2
var s = new Child('Seth');
s.say(); // "Adam"
