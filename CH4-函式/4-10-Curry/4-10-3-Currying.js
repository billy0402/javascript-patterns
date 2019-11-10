// 一個已經 curry 化的 add()
function add(x, y) {
    var oldX = x, oldY = y;
    if (typeof oldY === 'undefined') { // 部分應用
        return function (newY) {
            return oldX + newY;
        };
    }

    // 全應用
    return x + y;
}

// 測試
typeof add(5); // "function"
add(3)(4); // 7

// 建立一個新函式並保存起來
var add2000 = add(2000);
add2000(10); // 2010


// 一個已經 curry 化的 add()
// 可接受只傳遞一部分的參數
function add(x, y) {
    if (typeof y === 'undefined') { // 部分應用
        return function (y) {
            return x + y;
        };
    }

    // 全應用
    return x + y;
}


function schonfinkelize(fn) {
    var slice = Array.prototype.slice, // 將 arguments 轉成真正的陣列
        stored_args = slice.call(arguments, 1); // 去掉第一個 (fn)

    return function () {
        var new_args = slice.call(arguments),
            args = stored_args.concat(new_args); // 合併新舊參數

        return fn.apply(null, args);
    };
}

// 這是一個普通的函式
function add(x, y) {
    return x + y;
}

// curry 化此函式，可以得到一個新函式
var newAdd = schonfinkelize(add, 5);
newAdd(4); // 9

// 另一種選擇: 直接呼叫產出的新函式
schonfinkelize(add, 6)(7); // 13


// 一個普通的函式
function add(a, b, c, d, e) {
    return a + b + c + d + e;
}

// 可以轉換任何數量的參數
schonfinkelize(add, 1, 2, 3)(5, 5); // 16

// 兩步驟的 currying 也行
var addOne = schonfinkelize(add, 1);
addOne(10, 10, 10, 10); // 41
var addSix = schonfinkelize(addOne, 2, 3); // 16
addSix(5, 5);
