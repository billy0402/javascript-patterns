/*
 * JavaScript 實現 private:
 * 將 private 資料用函式包起來，
 * 確保他是函式的區域變數，不要讓它在函式外也可以存取
 */
function Gadget() {
    // private 成員
    var name = 'iPod';
    // public 方法
    // 特權方法 (privileged methods):
    // 存取 private 成員的 public 方法
    this.getName = function () {
        return name;
    };
}

var toy = new Gadget();

// name 會回傳 undefined，因為他是 private
console.log(toy.name); // "undefined"
// public 方法可以存取 name
console.log(toy.getName()); // "iPod"
