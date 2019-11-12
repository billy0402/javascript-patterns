function require(file, callback) {
    var script = document.getElementsByTagName('script')[0],
        newJS = document.createElement('script');

    // IE
    newJS.onreadystatechange = function () {
        if (newJS.readyState === 'loaded' || newJS.readyState === 'complete') {
            newJS.onreadystatechange = null;
            callback();
        }
    };

    // 其他瀏覽器
    newJS.onload = function () {
        callback();
    };

    newJS.src = file;
    script.parentNode.insertBefore(newJS, script);
}

/*
<?php
    header('Content-Type: application/javascript');
    sleep(1);
?>
function extraFunction(logThis) {
    console.log('loaded and executed');
    console.log(logThis);
}
*/

// 在 script 檔下載完成之後執行
require('onDemand.js.php', function () {
    extraFunction('load from the parent page');
    document.body.appendChild(document.createTextNode('done!'));
});
