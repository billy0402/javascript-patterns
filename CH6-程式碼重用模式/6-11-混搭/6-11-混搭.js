// 混搭 (mix-in): 尋訪並複製屬性，並切斷了和父物件之間的屬性
// 此實作在改變一個或多個父物件，並不會影響到子物件
function mix() {
    var arg, prop, child = {};

    for (arg = 0; arg < arguments.length; arg += 1) {
        for (prop in arguments[arg]) {
            if (arguments[arg].hasOwnProperty(prop)) {
                child[prop] = arguments[arg][prop];
            }
        }
    }

    return child;
}

var cake = mix(
    {eggs: 2, large: true},
    {butter: 1, salted: true},
    {flour: '3 cups'},
    {sugar: 'sure!'}
);
console.dir(cake);
/*
 * { eggs: 2,
 * large: true,
 * butter: 1,
 * salted: true,
 * flour: '3 cups',
 * sugar: 'sure!' }
 */
