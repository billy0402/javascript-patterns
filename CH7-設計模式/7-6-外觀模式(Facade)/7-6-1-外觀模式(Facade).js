/*
 * 外觀模式 (Facade):
 * 為其他物件提供一種替代的介面，保持方法簡短，並且不要讓方法一次處理太多工作。
 * 最終將得到一組更大量的方法，這是相對於讓 uber (父物件) 的方法帶有大量的參數。
 * 有時某兩個或多個方法經常會一起呼叫，在這種情況，建立另一個方法來包裝這些重複出現的方法呼叫，似乎頗有道理。
 */

var myEvent = {
    // ...
    stop: function (e) {
        // 別的瀏覽器
        if (typeof e.preventDefault === 'function') {
            // 困住事件，不讓它向上冒泡(傳遞)到父節點
            e.preventDefault();
        }
        if (typeof e.stopPropagation === 'function') {
            // 不允許瀏覽器進行預設動作 (例如 前往一個連結 或 提交一份表單)
            e.stopPropagation();
        }

        // IE，適合將瀏覽器不同處隱藏在 facade
        if (typeof e.returnValue === 'boolean') {
            e.returnValue = false;
        }
        if (typeof e.cancelBubble === 'boolean') {
            e.cancelBubble = false;
        }
    }
    // ...
};
