var scareMe = function () {
    alert('Boo!');
    scareMe = function () {
        alert('Double boo!');
    };
};

// 使用自我定義的函式
scareMe(); // Boo!
scareMe(); // Double boo!

/*
 * 別稱: 惰性的函式定義 (lazy function definition)
 * 第一次使用前都沒有正確的定義，而之後就變得懶惰，做更少的事
 */


// 1. 加入一個新屬性
scareMe.property = 'property';
// 2. 賦值給一個不同的名稱
var prank = scareMe;
// 3. 作為方法來使用
var spooky = {
    boo: scareMe
};

// 用新的名稱來呼叫
prank(); // Boo!
prank(); // Boo!
console.log(prank.property); // "property"

// 用方法呼叫
spooky.boo(); // Boo!
spooky.boo(); // Boo!
console.log(spooky.boo.property); // "property"

// 用自我定義函式
scareMe(); // Double boo!
scareMe(); // Double boo!
// 重新定義之前，加到原始函式的屬性都會遺失
console.log(scareMe.property); // undefined
