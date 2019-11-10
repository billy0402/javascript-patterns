var myArray;
(function () {
    var aStr = '[object Array]',
        toString = Object.prototype.toString;

    function isArray(a) {
        return toString.call(a) === aStr;
    }

    function indexOf(hayStack, needle) {
        var i = 0,
            max = hayStack.length;

        for (; i < max; i += 1) {
            if (hayStack[i] === needle) {
                return i;
            }
        }

        return -1;
    }

    // 揭露模式 (revelation pattern)
    // 將 private 方法 揭露為 public 方法
    myArray = {
        isArray: isArray,
        indexOf: indexOf,
        inArray: indexOf
    }
}());

myArray.isArray([1, 2]); // true
myArray.isArray({0: 1}); // false
myArray.indexOf(['a', 'b', 'z'], 'z'); // 2
myArray.inArray(['a', 'b', 'z'], 'z'); // 2

myArray.indexOf = null;
myArray.inArray(['a', 'b', 'z'], 'z'); // 2
