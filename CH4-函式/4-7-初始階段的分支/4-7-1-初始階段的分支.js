// 之前的版本
var utils = {
    addListener: function (el, type, fn) {
        if (typeof window.addEventListener === 'function') {
            el.addEventListener(type, fn, false);
        } else if (typeof document.attachEvent === 'function') { // IE
            el.attachEvent('on' + type, fn);
        } else { // old browser
            el['on' + type] = fn;
        }
    },
    removeListener: function (el, type, fn) {
        // 做法跟上面差不多一樣...
    }
};


// 修改後的版本
// 工具函式介面
var utils = {
    addListener: null,
    removeListener: null
};

// 工具函式實作
if (typeof window.addEventListener === 'function') {
    utils.addListener = function (el, type, fn) {
        el.addEventListener(type, fn, false);
    };
    utils.removeListener = function (el, type, fn) {
        el.removeListener(type, fn, false);
    };
} else if (typeof document.attachEvent === 'function') { // IE
    utils.addListener = function (el, type, fn) {
        el.attachEvent('on' + type, fn);
    };
    utils.removeListener = function (el, type, fn) {
        el.detachEvent('on' + type, fn);
    };
} else { // old browser
    utils.addListener = function (el, type, fn) {
        el['on' + type] = fn;
    };
    utils.removeListener = function (el, type, fn) {
        el['on' + type] = null;
    };
}
