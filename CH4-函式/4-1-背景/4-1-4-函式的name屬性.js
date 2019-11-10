// 宣告式
function foo() {
}
// 表示式
var bar = function () {
};
// 具名表示式
var baz = function baz() {
};

console.log(foo.name);
// "foo"
console.log(bar.name);
// ""
console.log(baz.name);
// "baz"


// 不建議
var foo = function bar() {
};
