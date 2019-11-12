/*
 * 關注點:
 * 1. 內容 (Content)
 * HTML 文件
 *
 * 2. 表現 (Presentation)
 * CSS 樣式，詳細描述文件外觀
 *
 * 3. 行為 (Behavior)
 * JavaScript，負責使用者的互動和任何對文件的動態改變
 * unobtrusive:
 * 它不應該擋到使用者的路，它不應該讓頁面無法使用，也不應該是讓網頁運作的必要條件。
 * 相反的，他只應用來增強頁面。
 */

// 反模式，瀏覽器偵測 (user agent sniffing)
if (navigator.userAgent.indexOf('MSIE') !== -1) {
    document.attachEvent('onclick', console.log);
}

// 較佳，功能檢測 (capability detection)
if (document.attachEvent) {
    document.attachEvent('onclick', console.log);
}

// 或甚至更明確
if (typeof document.attachEvent !== 'undefined') {
    document.attachEvent('onclick', console.log);
}
