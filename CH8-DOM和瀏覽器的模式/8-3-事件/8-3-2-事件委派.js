/*
 * 事件委派模式:
 * 利用事件的傳播來減少附加到各個節點的事件監聽總量。
 * ex: 10 個按鈕
 * (X) 10 個監聽器在每個按鈕上
 * (O) div 上附加一個事件監聽器
 *
 * 缺點:
 * 需要多一點點程式碼來過濾掉發生在容器中，你卻不感興趣的物件的事件。
 *
 * 優點:
 * 提高效能和更乾淨的程式碼。
 */

// <div id="click-wrap">
//     <button>Click me: 0</button>
// <button>Click me too: 0</button>
// <button>Click me three: 0</button>
// </div>

function myHandler(e) {
    var src, parts;

    // 取得事件和來源的元素
    e = e || e.window.event;
    src = e.target || e.srcElement;

    // 過濾你有興趣的節點
    if (src.nodeName.toLowerCase() !== 'button') {
        return;
    }

    // 實際要做的事: 更新文字
    parts = src.innerHTML.split(': ');
    src.innerHTML = parts[0] + ': ' + parts[1];

    // 不要再向上傳播事件
    if (typeof e.stopPropagation === 'function') { // W3C
        e.stopPropagation();
    }
    if (typeof e.cancelBubble !== 'undefined') { // IE
        e.cancelBubble = true;
    }

    // 避免預設行為
    if (typeof e.preventDefault === 'function') { // W3C
        e.preventDefault();
    }
    if (typeof e.returnValue !== 'undefined') { // IE
        e.returnValue = false;
    }
}


// YUI3
function myHandler(e) {
    var src = e.currentTarget,
        parts;

    parts = src.get('innerHTML').split(': ');
    parts[1] = parseInt(parts[1], 10) + 1;
    src.set('innerHTML', parts[0] + ': ' + parts[1]);

    e.halt();
}

// action, handler, CSS selector, your interested node
Y.delegate('click', myHandler, '#click-wrap', 'button');
