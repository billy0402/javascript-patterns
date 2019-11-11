/*
 * 迭代器模式 (Iterator):
 * 有個包含某種資料集的物件。
 * 這些資料也許儲存在一個複雜的結構內，而想要提供簡單的操作，來存取該結構的元件。
 * 客戶並不需要知道你是如何組織資料的，他們只需要操作這些個別元素就可以了。
 */

var agg = (function () {
    var index = 0,
        data = [1, 2, 3, 4, 5],
        length = data.length;

    return {
        // 回傳下一個元素
        next: function () {
            var element;
            if (!this.hasNext()) {
                return null;
            }
            element = data[index];
            index = index + 2;
            return element;
        },
        // 判斷是否已經到達資料末端
        hasNext: function () {
            return index < length;
        },
        // 重設索引指向資料開頭
        rewind: function () {
            index = 0;
        },
        // 取得當前的元素
        current: function () {
            return data[index];
        }
    };
}());

var element;

while (element = agg.next()) {
    // 對元素作些操作...
    console.log(element);
}

// this loop logs 1, then 3, then 5
while (agg.hasNext()) {
    // 對元素作些操作...
    console.log(agg.next());
}

// 回到開頭
agg.rewind();
console.log(agg.current()); // 1
