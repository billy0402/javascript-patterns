var thePlotThickens = function () {
    console.log('500ms later...');
};

setTimeout(thePlotThickens, 500); // 一次
setInterval(thePlotThickens, 500); // 持續
