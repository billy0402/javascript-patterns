// 檢索邏輯
var findNodes = function () {
    var i = 10000, // 很大的迴圈
        nodes = [], // 用來儲存結果
        found; // 符合的節點

    while (i) {
        i -= 1;
        // 這裡是很複雜的邏輯...
        nodes.push(found);
    }

    return nodes;
};

// 變更邏輯
var hide = function (nodes) {
    var i = 0, max = nodes.length;

    for (; i < max; i += 1) {
        nodes[i].style.display = 'none';
    }
};

// 執行這些函式
hide(findNodes());


// 重構 findNodes，讓它接受一個回呼
var findNodes = function (callback) {
    var i = 10000,
        nodes = [],
        found;

    // 檢查回呼確實可以執行
    if (typeof callback !== 'function') {
        callback = false;
    }

    while (i) {
        i -= 1;

        // 這裡是很複雜的邏輯...

        // 現在執行回呼
        if (callback) {
            callback(found);
        }

        nodes.push(found);
    }

    return nodes;
};

// 一個回呼函式
var hide = function (node) {
    node.style.display = 'none';
};

// 和先前一樣，找出節點並隱藏
findNodes(hide);

// 傳遞一個匿名函式
findNodes(function (node) {
    node.style.display = 'block';
});
