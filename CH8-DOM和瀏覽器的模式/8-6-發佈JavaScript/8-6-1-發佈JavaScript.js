/*
 * 合併 Scripts:
 * 使用的外部元件要盡量少，因為 HTTP 請求是昂貴的。
 * 將外部的 script 檔案合併再一起，就可以顯著提升頁面載入的速度。
 * 串接檔案的動作應該在程式碼進入產品前一刻做，否則會增加開發 debug 時的痛苦。
 *
 * 缺點:
 * 1. 在實際上線之前多了一個步驟，不過這很容易在命令列上自動化。
 * $ cat jquery.js jquery.quickselect.js jquery.limit.js > all.js
 *
 * 2. 會失去一點點快處，即使你只是在其中一個檔案做了個小改變，卻使整份快取都失效了。
 *    這就是為什麼對於大型的專案，最好訂定一個發佈的時程表，
 *    或者可以考慮使用兩份檔案: 其中一份包含的檔案都是時常變更的，另一份則是幾乎不會變動的核心。
 *
 * 3. 必須要給合併的檔案使用一些命名和版本號的模式，
 *    例如使用時間戳記: all_20191111.js 或者 檔案內容的雜湊值 (hash)。
 *
 *
 * 最小化:
 * 不需要下載你程式碼內的所有註解，因為它們對於應用程式的運作毫無用處。
 * 效果與多大量使用註解與空白，還有選擇的最小化工具有關，平均減少大約 50% 的檔案大小。
 *
 * 壓縮:
 * Apache 的 .htaccess 設定檔，開啟 gzip 壓縮，平均減少大約 70% 的檔案大小。
 * AddOutputFilterByType DEFLATE text/html text/css text/plain text/xml
 *                               application/javascript application/json
 *
 *
 * Expires Header:
 * Apache 的 .htaccess 設定檔，試著增加檔案在重新造訪時，可以待在快取的機會。
 * ExpiresActive On
 * ExpireByType application/x-javascript "access plus 10 years"
 *
 * 缺點:
 * 想要改變檔案內容時，也必須重新命名檔案，
 * 但如果已經為合併檔案建立了命名慣例，就沒有這個問題了。
 *
 *
 * 使用 CDN:
 * 內容配送網路 (Content Delivery Network)，一種付費服務，
 * 可以將檔案分發至世界各地的資料中心，讓檔案可以更快速的服務你的使用者，但同時可以在程式碼內保持同一份 URL。
 *
 * 免費的 CDN:
 * Google: some CDN
 * Microsoft: jQuery. Ajax
 * YahooL YUI
 */
