// 反模式，在文件的 head 裡使用多個獨立的檔案
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My App</title>
    <!--  反模式  -->
    <script src="jquery.js"></script>
    <script src="jquery.quickselect.js"></script>
    <script src="jquery.lightbox.js"></script>
    <script src="myapp.js"></script>
</head>
<body>
<!-- ... -->
</body>
</html>
 */


// 更好的選擇，合併所有的檔案
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My App</title>
    <script src="all_20191111.js"></script>
</head>
<body>
<!-- ... -->
</body>
</html>
 */


// 最好的選擇，將合併好的 script 放在頁面的最尾端
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My App</title>
</head>
<body>
<!-- ... -->
<script src="all_20191111.js"></script>
</body>
</html>
 */
