var myArray = [];
// 次佳的迴圈模式 (迴圈轉一次計算一次 myArray.length)
for (var i = 0; i < myArray.length; i++) {
    // 操作 myArray[i]
}

/*
 * HTMLCollection (DOM方法回傳物件):
 * document.getElementsByName();
 * document.getElementsByClassName();
 * document.getElementsByTagName();
 * document.images;
 * document.links;
 * document.forms;
 * document.forms[0].elements;
 */

// myArray.length 只計算一次，並用於整個迴圈中
for (var i = 0, max = myArray.length; i < max; i++) {
    // 操作 myArray[i]
}

// max 大小 隨 myArray 長度增長
function looper() {
    // 將 var 提出迴圈外 (單一 var 模式)
    var i = 0,
        max,
        myArray = [];

    // ...

    for (i = 0, max = myArray.length; i < max; i++) {
        // 操作 myArray[i]
    }
}


/*
 * i = i + 1    (O)
 * i += 1       (O)
 * JSLint (plusplus)
 * 過度使用伎倆 (excessive trickiness)
 * i++          (X)
 */


/*
 * 變形:
 * 少用一個變數 (max)
 * 遞減至 0 通常比較快，因為和 0 比較會比和陣列長度或任何東西比較都更有效率
 * JSLint 不允許 i--
 */

// 變形1
var i, myArray = [];
for (i = myArray.length; i--;) {
    // 操作 myArray[i]
}

// 變形2
var myArray = [],
    i = myArray.length;
while (i--) {
    // 操作 myArray[i]
}
