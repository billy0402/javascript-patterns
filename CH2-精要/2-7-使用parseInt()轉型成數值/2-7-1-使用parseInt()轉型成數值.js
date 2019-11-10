// 務必指定底數 (解析字串並轉型)
var month = '06',
    year = '09';
month = parseInt(month, 10);
year = parseInt(year, 10);
console.log(month, year);

// 比 parseInt() 更快 (單純轉型)
console.log(+'08');
console.log(Number('08'));

var numString = '08 Hello';
console.log(parseInt(numString)); // logs 8
console.log(+numString); // logs NaN
console.log(Number(numString)); // logs NaN
