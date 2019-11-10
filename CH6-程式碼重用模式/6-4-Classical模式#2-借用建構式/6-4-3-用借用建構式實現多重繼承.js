function Cat() {
    this.legs = 4;
    this.say = function () {
        return 'meaowww';
    }
}

function Bird() {
    this.legs = 2;
    this.wings = 2;
    this.fly = true;
}

function CatWings() {
    Cat.apply(this);
    Bird.apply(this);
}

var jane = new CatWings();
console.dir(jane);
// CatWings { legs: 2, say: [Function], wings: 2, fly: true }
// 任何重複的屬性都是最後的贏
