// 一個作為輸入的 JSON 字串
var jsonStr = '{"myKey": "my value"}';

// 反模式: 使用 eval()
var data = eval('(' + jsonStr + ')');

// 這樣比較好
var data = JSON.parse(jsonStr);
// 舊版: https://github.com/douglascrockford/JSON-js/blob/master/json2.js

console.log(data.myKey);
// "my value"


// 輸入的 JSON 字串
var jsonStr = '{"myKey": "my value"}';

// 用一個 YUI 實例分析字串，並轉換成物件
YUI().use('json-parse', function (Y) {
    var data = Y.JSON.parse(jsonStr);
    console.log(data.myKey);
    // "my value"
});


// 輸入的 JSON 字串
var jsonStr = '{"myKey": "my value"}';

// 使用 jQuery 分析字串
var data = jQuery.parseJSON(jsonStr);
console.log(data.myKey);
// "my value"


// 序列化成 JSON
var dog = {
    name: "Fido",
    dob: new Date(),
    legs: [1, 2, 3, 4]
};

var jsonStr = JSON.stringify(dog);

console.log(jsonStr);
// {"name":"Fido","dob":"2019-10-06T09:56:24.720Z","legs":[1,2,3,4]}
