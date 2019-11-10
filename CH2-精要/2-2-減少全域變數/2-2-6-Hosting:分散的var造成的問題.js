// 反模式
myName = 'global'; // 全域變數

function func() {
    console.log(myName); // "undefined"
    var myName = 'local';
    console.log(myName); // "local"
}

func();


myName = 'global'; // 全域變數

function func() {
    var myName; // 等同於 var myName = undefined;
    console.log(myName); // "undefined"
    var myName = 'local';
    console.log(myName); // "local"
}

func();
