var preload,
    isIE = /*@cc_on!@*/false; // 用條件註解 (conditional comments) 來進行 IE 的偵測
 // isIE = !false; IE 視角 (true)

if (isIE) { // IE
    preload = function (file) {
        // 類似 image beacon 模式
        new Image().src = file;
    };
} else {
    preload = function (file) { // 其他瀏覽器
        // 用 <object> 替代 script 元素
        var obj = document.createElement('object'),
            body = document.body;

        // 為了避免此 object 標籤被看到，將 width 和 height 屬性設為 0
        obj.width = '0';
        obj.height = '0';
        // 設定其 data 屬性指向 script 的 url
        obj.data = file;
        body.appendChild(obj);
    };
}

preload('myWebWorker.js');
