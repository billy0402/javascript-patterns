/*
 * 格式的修飾詞
 * g 全域檢查
 * m 檢查多行
 * i 不區分大小寫
 */
var re = /pattern/gmi;

var noLetters = 'abc123XYZ'.replace(/[a-z]/gi, '');
console.log(noLetters);


// 正規表示式實字在語法解析時就已經產生，而且只產生一個物件
// ES5 已修正，正規表示式實字也會建立新物件
function getRE() {
    var re = /[a-z]/;
    re.foo = 'bar';
    return re;
}

var reg = getRE(),
    reg2 = getRE();

console.log(reg === reg2);
// true (ES5: false)
reg.foo = 'baz';
console.log(reg2.foo);
// "baz" (ES5: "bar")


// 正規表示式建構式，不論前面是否加 new，都會建立新物件
var reg3 = new RegExp('[a-z]', 'gm');
var reg4 = RegExp('[a-z]', 'gm');
console.log(reg3 === reg4);
// false
