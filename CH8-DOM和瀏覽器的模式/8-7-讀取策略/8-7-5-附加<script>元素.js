// 將 script 附加在文件的 <head> 裡
// documentElement > <html>，firstChild > <head>
document.documentElement.firstChild.appendChild(script);
document.getElementsByTagName('head').appendChild(script);


// 沒有 <head>.<body> 的情況，ex: 廣告.UI 元件 (widget)
document.body.appendChild(script);


// 在頁面的第一個 script 之前插入
var firstScript = document.getElementsByTagName('script')[0];
firstScript.parentNode.insertBefore(script, firstScript);
