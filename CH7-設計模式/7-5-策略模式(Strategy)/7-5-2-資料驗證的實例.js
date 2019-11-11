var validator = {
    // 所有可用的檢查
    types: {},

    // 當前的驗證過程中的錯誤訊息
    messages: [],

    // 當前的驗證設定值，格式為 名稱: 檢查類型
    config: {},

    // 介面的方法
    // data 是物件，包含多組名值對
    validate: function (data) {
        var i, msg, type, checker, resultOk;

        // 重新設置所有訊息
        this.messages = [];

        for (i in data) {
            if (data.hasOwnProperty(i)) {
                type = this.config[i];
                checker = this.types[type];

                if (!type) {
                    continue; // 不需要驗證
                }

                if (!checker) { // 歐喔
                    throw {
                        name: 'ValidationError',
                        message: 'No handler to validate type ' + type
                    };
                }

                resultOk = checker.validate(data[i]);
                if (!resultOk) {
                    msg = 'Invalid value for *' + i + '*, ' + checker.instructions;
                    this.messages.push(msg);
                }
            }
        }

        return this.hasErrors();
    },

    // 輔助方法
    hasErrors: function () {
        return this.messages.length !== 0;
    }
};

// 檢查非空的值
validator.types.isNonEmpty = {
    validate: function (value) {
        return value !== '';
    },
    instructions: 'the value cannot be empty'
};

// 檢查值是否為數值
validator.types.isNumber = {
    validate: function (value) {
        return !isNaN(value);
    },
    instructions: 'the value can only be a valid number, e.g. 1, 3.14 or 201'
};

// 檢查值是否只包含英文字母和數字
validator.types.isAlphaNum = {
    validate: function (value) {
        return !/[^a-z0-9]/i.test(value);
    },
    instructions: 'the value can only contain characters and numbers, no symbols'
};

var data = {
    firstName: 'Super',
    lastName: 'Main',
    age: 'unknown',
    username: 'o_O'
};

validator.config = {
    firstName: 'isNonEmpty',
    age: 'isNumber',
    username: 'isAlphaNum'
};

validator.validate(data);
if (validator.hasErrors()) {
    console.log(validator.messages.join('\n'));
    // Invalid value for *age*, the value can only be a valid number, e.g. 1, 3.14 or 201
    // Invalid value for *username*, the value can only contain characters and numbers, no symbols
}
