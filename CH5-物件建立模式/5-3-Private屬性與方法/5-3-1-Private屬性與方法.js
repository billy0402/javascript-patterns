// JavaScript 沒有 private.protected.public 之分，所有成員都是 public
var myObj = {
    myProp: 1,
    getProp: function () {
        return this.myProp;
    }
};

console.log(myObj.myProp);    // myProp 可被 public 存取
console.log(myObj.getProp()); // getProp() 也是 public


// 用建構式建立物件，所有成員仍是 public
function Gadget() {
    this.name = 'iPod';
    this.stretch = function () {
        return 'iPad';
    };
}

var toy = new Gadget();
console.log(toy.name);      // name 是 public
console.log(toy.stretch()); // stretch() 是 public
