/*
 * 延遲載入:
 * 在頁面的 load 事件過後，才讀取外部檔案。
 *
 * 第一部分:
 * 直接由網頁引入，用來初始化並在 UI 元素上附加事件處理器。
 *
 * 第二部分:
 * 只有在使用者進行了某些互動，或者某些條件才會需要。
 * 再次利用附加動態的 script 元素到網頁表頭或主體的方式載入。
 */

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My App</title>
</head>
<body>
<div id="header">
    <img src="logo.png"/>
    <!-- ... -->
</div>
<!--  第一段分塊結束  -->
<!-- The full body of page -->
<!-- ... -->
<!--  第二段分塊結束  -->
<script src="all_20191111.js"></script>
<script>
    window.onload = function () {
        var script = document.createElement('script');
        script.src = 'all_lazy_20191111.js';
        document.documentElement.firstChild.appendChild(script);
    };
</script>
</body>
</html>
<!-- 第三段分塊結束 -->
 */
