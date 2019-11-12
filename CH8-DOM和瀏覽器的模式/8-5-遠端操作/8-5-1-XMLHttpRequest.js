/*
 * XHR 檔案類型:
 * 1. XML 文件
 * 2. HTML 片段
 * 3. JSON 資料
 * 4. 簡單的文字檔或者其他格式
 */

// 建立一個 XMLHttpRequest(XHR) 物件
var xhr = new XMLHttpRequest();

// 提供一個回呼函式，當請求物件的狀態改變時可以獲得通知
xhr.onreadystatechange = handleRespnse;

// 送出請求
xhr.open('GET', 'page.html', true);
xhr.send();


var i, xhr, activeXids = [
    'MSXML2.XMLHTTP.3.0',
    'MSXML2.XMLHTTP',
    'Microsoft.XMLHTTP'
];

if (typeof XMLHttpRequest === 'function') { // 原生的 XHR
    xhr = new XMLHttpRequest();
} else { // IE7 之前的版本
    for (i = 0; i < activeXids.length; i += 1) {
        try {
            xhr = new ActiveXObject(activeXids[i]);
            break;
        } catch (e) {
        }
    }
}

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) { // 0 ~ 4(完成)
        return false;
    }
    if (xhr.status !== 200) {
        alert('Error, status code: ' + xhr.status);
        return false;
    }
    document.body.innerHTML += '<pre>' + xhr.responseText + '</pre>';
};

xhr.open('GET', 'page.html', true);
xhr.send();
