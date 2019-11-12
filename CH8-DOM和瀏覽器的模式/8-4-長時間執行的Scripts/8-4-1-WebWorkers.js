/*
 * 長時間執行的 Scripts:
 * 1. setTimeout()
 * 2. Web Workers
 */

var ww = new Worker('myWebWorker.js');
// 呼叫端訂閱 onmessage 事件來接收更新，onmessage 回呼接受一個 event 物件為參數
ww.onmessage = function (event) {
    // event 物件的 data 屬性可以填入任何 worker 想要傳遞的東西
    document.body.innerHTML += '<p>message from the background thread: ' + event.data + '</p>';
};
// message from the background thread: hello there
// message from the background thread: halfway there, `tmp` is now 3749999975000001
// message from the background thread: all done
