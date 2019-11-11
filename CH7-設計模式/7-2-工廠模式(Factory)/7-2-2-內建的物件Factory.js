// Object() 也是一個 Factory
// 呼叫 Object() 時，new 可加可不加
var o = new Object(),
    n = new Object(1),
    s = Object('1'),
    b = Object(true);

// test
o.constructor === Object; // true
n.constructor === Number; // true
s.constructor === String; // true
b.constructor === Boolean; // true
