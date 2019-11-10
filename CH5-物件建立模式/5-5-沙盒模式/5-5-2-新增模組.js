Sandbox.modules = {};

Sandbox.modules.dom = function (box) {
    box.foo = 'bar';
    box.getElement = function () {
    };
    box.getStyle = function () {
    };
};

Sandbox.modules.event = function (box) {
    // 如有必要則存取 Sandbox 的原型
    box.constructor.prototype.m = 'mmm';
    box.attachEvent = function () {
    };
    box.detachEvent = function () {
    };
};

Sandbox.modules.ajax = function (box) {
    box.makeRequest = function () {
    };
    box.getRequest = function () {
    };
};
