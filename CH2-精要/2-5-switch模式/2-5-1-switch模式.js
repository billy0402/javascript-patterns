var inspectMe = 0,
    result = '';

switch (inspectMe) {
case 0:
    result = 'zero';
    break;
case 1:
    result = 'one';
    break;
default:
    result = 'unknown';
}

/*
 * switch 編碼規範:
 * 將每個 case 與 switch 並排 (大括號縮排規則的例外)
 * 將每個 case 內的程式碼縮排
 * 用清楚的 break; 結束每個 case
 * 避免未完結的 case (刻意刪去 break;)
 * 用 default: 結束 switch，確保有個合理的結果，即使沒有任何 case 符合
 */
