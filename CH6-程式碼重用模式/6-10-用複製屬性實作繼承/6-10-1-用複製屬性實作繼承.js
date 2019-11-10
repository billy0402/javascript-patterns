// 淺層複製 (shallow copy): 迴圈尋訪父物件的每個成員並複製它們的"參考"，此範例為這種
function extend(parent, child) {
    var i;

    child = child || {};

    for (i in parent) {
        if (parent.hasOwnProperty(i)) {
            child[i] = parent[i];
        }
    }

    return child;
}

var dad = {name: 'Adam'};
var kid = extend(dad);
kid.name; // "Adam"


// 使用淺層複製，如果改變了子物件的屬性，只要該屬性值是物件，那麼也同時改變了父物件的屬性
// 這樣的特性較適合方法(因為韓式也是物件，也是用參考傳遞)，但對於物件和陣列會讓人感到意外
var dad = {
    counts: [1, 2, 3],
    reads: {paper: true}
};
var kid = extend(dad);

kid.counts.push(4);
dad.counts.toString(); // "1,2,3,4"
dad.reads === kid.reads; // true


// 深層複製 (deep copy): 檢查所要複製的屬性是否為物件或陣列，
// 若是的話會用遞迴的方式進入該物件，一樣尋訪每個屬性並複製
function extendDeep(parent, child) {
    var i,
        toStr = Object.prototype.toString,
        aStr = '[object Array]';

    child = child || {};

    for (i in parent) {
        if (parent.hasOwnProperty(i)) {
            if (typeof parent[i] === 'object') {// 判斷是否為物件
                // 判斷真的是物件還是陣列 (陣列也是一種物件)
                child[i] = (toStr.call(parent[i]) === aStr) ? [] : {};
                extendDeep(parent[i], child[i])
            } else {
                child[i] = parent[i];
            }
        }
    }

    return child;
}

var dad = {
    counts: [1, 2, 3],
    reads: {paper: true}
};
var kid = extendDeep(dad);

kid.counts.push(4);
kid.counts.toString(); // "1,2,3,4"
dad.counts.toString(); // "1,2,3"

dad.reads === kid.reads; // false
kid.reads.paper = false;
kid.reads.web = true;
dad.reads.paper; // true


/*
 * 淺層複製: Firebug extend()
 * 深層複製: jQuery extend(). YUI3 Y.clone()
 * 此模式只有關於物件和物件的自身屬性，完全沒有涉及到原型
 */
