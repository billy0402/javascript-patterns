// ({...}).init();
// ({...}.init());
({
    // 你可以在這裡定義設定值，又稱為組態常數
    maxWidth: 600,
    maxHeight: 400,

    // 你也可以定義實用工具方法 (utility methods)
    gimmeMax: function () {
        return this.maxWidth + 'x' + this.maxHeight;
    },

    // 初始化
    init: function () {
        console.log(this.gimmeMax());
        // 更多初始化工作...

        // 初始化後保留物件的參考
        // return this;
    }
}).init();
