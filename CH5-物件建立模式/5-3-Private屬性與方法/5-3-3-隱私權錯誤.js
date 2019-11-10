function Gadget() {
    // private 成員
    var specs = {
        screenWidth: 320,
        screenHeight: 480,
        color: 'white'
    };

    // public 方法
    this.getSpecs = function () {
        // var specs = specs;
        return specs;
    };
    // 最低授權原則 POLA (Principle of Least Authority)
    // 不應該給得比需要更多
    this.getDimensions = function () {
        return {
            screenWidth: specs.screenWidth,
            screenHeight: specs.screenHeight
        };
    }
}

// getSpecs() 回傳 specs 物件的參考，
// 造成 Gadget 使用者允許修改表面上是隱藏且為 private 的 specs
var toy = new Gadget(),
    specs = toy.getSpecs();
specs.color = 'black';
specs.price = 'free';

console.log(toy.getSpecs());
/*
 * {
 *     screenWidth: 320,
 *     screenHeight: 480,
 *     color: 'black',
 *     price: 'free'
 * }
 */