// 不好的實踐方式
for (var i = 0; i < 10; i++)
    console.log(i);

// 糟糕!
for (var i = 0; i < 10; i++)
    console.log(i);
    console.log(i + 'is' + (i % 2 ? 'odd' : 'even')); // 其實在迴圈外

// 這麼做好多了
for (var i = 0; i < 10; i++) {
    console.log(i);
}


// 不好
if (true)
    console.log(true);
else (false)
    console.log(false);

// 較佳
if (true) {
    console.log(true);
} else {
    console.log(false);
}
