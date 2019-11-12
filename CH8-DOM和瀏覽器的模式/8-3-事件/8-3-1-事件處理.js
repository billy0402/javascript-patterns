// <button id="click-me">Click me: 0</button>

// 不太理想的解決方案
var b = document.getElementById('click-me'),
    count = 0;
b.onclick = function () {
    count += 1;
    b.innerHTML = 'Click me ' + count;
};


function myHandler(e) {
    var src, parts;

    // 取得事件和來源的元素
    e = e || e.window.event;
    src = e.target || e.srcElement;

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

var b = document.getElementById('click-me');
if (document.addEventListener) { // W3C
    b.addEventListener('click', myHandler, false);
} else if (document.attachEvent) { // IE
    b.attachEvent('onclick', myHandler);
} else { // last resort
    b.onclick = myHandler;
}
