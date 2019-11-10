function addPerson(first, last) {
}

function addPerson(first, last, dob, gender, address) {
}

addPerson('Bruce', 'Wayne', new Date(), null, null, 'batman');


// 設定值 (configuration)
var conf = {
    username: 'batman',
    first: 'Bruce',
    last: 'Wayne'
};

addPerson(conf);

/*
 * 優點:
 * 不需要記住參數和他們的順序
 * 可以安全的略過選用參數
 * 更容易閱讀和維護
 * 更容易新增和移除參數
 *
 * 缺點:
 * 需要知道參數的名稱
 * 設定值物件的屬性名稱無法被最小化
 *
 * 常見場景:
 * 建立 DOM 元素
 * 設定 CSS 樣式
 *
 * 原因:
 * 大量的屬性 (properties) 和 特定 (attributes)
 * 大多數選用
 */
