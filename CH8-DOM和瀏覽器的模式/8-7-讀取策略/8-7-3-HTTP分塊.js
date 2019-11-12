/*
 * HTTP 分塊編碼 (chunked encoding):
 * 可以分批傳送頁面的片段。
 * 因此如果有個非常複雜的頁面，不需要等伺服器端所有的工作都完成，才開始傳送頁面上或多或少都有的靜態檔頭。
 */

// 簡單的策略，先用第一個分塊傳送頁面的 <head> 內容，同時頁面其餘的部分仍繼續組織產生
/*
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>My App</title>
    <!--  第一段分塊結束  -->
</head>
<body>
<!-- ... -->
<script src="all_20191111.js"></script>
</body>
<!-- 第二段分塊結束 -->
</html>
 */


// 簡單的改進，將 JavaScript 再搬回 <head> 裡面，成為第一塊的一部分。
// 這樣的話，頁面的其他部分在伺服器上還沒準備完成的時候，瀏覽器的標頭就可以先下載 script 檔案。
/*
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>My App</title>
    <script src="all_20191111.js"></script>
    <!--  第一段分塊結束  -->
</head>
<body>
<!-- ... -->
</body>
<!-- 第二段分塊結束 -->
</html>
 */


// 更好的選擇，使用第三塊分段，讓它僅包含 script，放在最接近頁面底部的地方。
// 你也可以在第一塊就傳送主體的部分，如果你在每個頁面的最上面都有個靜態的標頭的話。
// 這種方式非常符合漸進式和 unobtrusive JavaScript 的精神。
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
</body>
</html>
<!-- 第三段分塊結束 -->
 */
