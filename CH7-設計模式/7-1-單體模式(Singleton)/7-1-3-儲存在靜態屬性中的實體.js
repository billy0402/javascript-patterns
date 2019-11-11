function Universe() {
    // 我們是不是已經有現成的實體呢？
    if (typeof Universe.instance === 'object') {
        return Universe.instance;
    }

    // 用一般方法繼續
    this.startTime = 0;
    this.bang = 'Big';

    // 快取
    Universe.instance = this;

    // 隱含地回傳
    // return this;
}

// 試試看
var uni = new Universe();
var uni2 = new Universe();
uni === uni2; // true


/*
 * 缺點:
 * instance 為 public，有機會被修改
 * 雖然其他的程式不太可能會錯誤地改動倒它 (比起讓 instance 是全域變數的機率要來得低得多)
 */
