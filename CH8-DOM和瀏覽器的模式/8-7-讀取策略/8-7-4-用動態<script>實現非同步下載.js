/*
 * JavaScript 會阻擋在它之後的檔案下載，避免方式:
 * 1. 用 XHR 請求來下載 script，並用 eval() 執行下載字串，
 *    這種做法受到來自同個網域的限制，還必須用到 eval()，這東西本身就是個反模式。
 * 2. 使用 defer 和 async 屬性，但並非所有瀏覽器都有支援。
 * 3. 使用動態的 <script> 元素。
 */

// 使用動態的 <script> 元素 (類似 JSONP)
// 建立一個新的 script 元素
var script = document.createElement('script');
// 設定其 src
script.src = 'all_20191111.js';
// 附加到頁面上
document.documentElement.firstChild.appendChild(script);


// 建立一個陣列來儲存所有的內嵌程式碼，其位置在頁面中越早越好
var myNameSpace = {
    inlineScripts: []
};

// 將所有獨立的內嵌 script 包進一個函式，並把每個函式都加進 inlineScripts 陣列裡
// 像下面這行
// <script>console.log('I am inline');</script>

// 會變成
// <script>
// myNameSpace.inlineScripts.push(function () {
//     console.log('I am inline');
// });
// </script>

// 讓主要的 script 用迴圈走訪內嵌 script 所形成的陣列，並執行每一段 script
var i,
    scripts = myNameSpace.inlineScripts,
    max = scripts.length;
for (i = 0; i < max; i++) {
    scripts[i]();
}
