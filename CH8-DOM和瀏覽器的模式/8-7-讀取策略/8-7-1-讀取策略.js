// 選擇一: 內嵌 JavaScript 程式碼
// <script>
// console.log('hello world');
// </script>

// 選擇二: 使用 src 屬性連結到一個獨立的檔案
// <script src="external.js"></script>


// <script> 的常見屬性:
// <script language="JavaScript"  // 預設語言就是 JavaScript，沒啥用處的屬性
//         type="text/javascript" // HTML4 和 XHTML1 要求，HTML5 不再需要，只剩滿足標籤檢驗器功能
//         defer                  // (HTML5) 非同步請求外部腳本，但是等待瀏覽器解析完才執行，而且早於 DOMContentLoaded
//         async>                 // (HTML5) 非同步請求外部腳本，回應後停止解析，執行腳本內容，使用在非 UI 類庫 (google analytics)
// </script>
