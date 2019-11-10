function Sandbox() {
    // 將參數列轉換為陣列
    var args = Array.prototype.slice.call(arguments),
        // 最後一個參數是回呼函式
        callback = args.pop(),
        // 模組可以用陣列方式傳遞，也可以用個別的參數傳遞
        modules = (args[0] && typeof args[0] === 'string') ? args : args[0],
        i;

    // 確保此函式是以建構式方式呼叫
    if (!(this instanceof Sandbox)) {
        return new Sandbox(modules, callback);
    }

    // 依照需要為 this 增加屬性
    this.a = 1;
    this.b = 2;

    // 現在，將模組新增至核心的 this 物件
    // 沒有指定模組，或者 '*' 都表示「使用所有模組」
    if (!modules || modules === '*') {
        modules = [];
        for (i in Sandbox.modules) {
            if (Sandbox.modules.hasOwnProperty(i)) {
                modules.push(i);
            }
        }
    }

    // 初始化所需的模組
    for (i = 0; i < modules.length; i += 1) {
        Sandbox.modules[modules[i]](this);
    }

    // 執行回呼
    callback(this);
}

// 依照需要建立 prototype 的屬性
Sandbox.prototype = {
    name: 'My Application',
    version: '1.0',
    getName: function () {
        return this.name;
    }
};
