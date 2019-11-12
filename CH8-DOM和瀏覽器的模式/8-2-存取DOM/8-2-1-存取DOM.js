// 反模式
for (var i = 0; i < 100; i++) {
    document.getElementById('result').innerHTML += ', ';
}

// 避免在迴圈中存取 DOM
// 較佳，更新的是區域變數
var i, content = '';
for (i = 0; i < 100; i++) {
    content += i + ', ';
}
document.getElementById('result').innerHTML += content;


// 反模式
var padding = document.getElementById('result').style.padding,
    margin = document.getElementById('result').style.margin;

// 將 DOM 參考指派給區域變數，並用此區域變數來操作
// 較佳
var style = document.getElementById('result').style,
    padding = style.padding,
    margin = style.margin;


// 如果可以的話，使用選擇器 API
document.querySelector('ul .selected');
document.querySelectorAll('#widget .class');
document.getElementById('myId'); // 最簡單也最快速
