if (true) {
    console.log("It's true");
}

// 或者

if (true)
{
    console.log("It's true");
}


// 分號插入機制 (semicolon insertion mechanism)
// 警告: 非預期的回傳值
function func() {
    return
    {
        name: 'Batman'
    };
}

console.log(func()); // "undefined"

// 警告: 非預期的回傳值
function func() {
    return undefined;
    {
        name: 'Batman'
    };
}

// 結論: 永遠使用大括號及分號，且永遠將左括號置於同一行
function funcCorrect() {
    return {
        name: 'Batman'
    };
}

console.log(funcCorrect()); // "{ name: 'Batman' }"
