// eval()
// 反模式
var obj = Object();
var property = 'name';
console.log(eval('obj.' + property));

// 這麼做比較好
var property = 'name';
console.log(obj['property']);


function myFunc() {
    console.log('myFunc');
}

// setTimeout(), setTimeout(), Function()
// 反模式
setTimeout('myFunc()', 1000);
setTimeout('myFunc(1,2,3)', 1000);

// 這麼做比較好
setTimeout(myFunc(), 1000);
setTimeout(function () {
    myFunc(1, 2, 3);
}, 1000);


// eval() vs new Function()
console.log(typeof un); // "undefined"
console.log(typeof deux); // "undefined"
console.log(typeof trios); // "undefined"

var jsString = 'var un = 1; console.log(un);';
eval(jsString); // logs 1

jsString = 'var deux = 2; console.log(deux);';
new Function(jsString)(); // logs 2

jsString = 'var trios = 3; console.log(trios);';
(function () {
    eval(jsString);
}()); // logs 3

console.log(typeof un); // "number"
console.log(typeof deux); // "undefined"
console.log(typeof trios); // "undefined"


// eval() vs Function()
(function () {
    var local = 1;
    eval('local = 3; console.log(local);'); // logs 3
    console.log(local); // logs 3
}());

(function () {
    var local = 1;
    Function('console.log(typeof local);')(); // logs undefined
}());
