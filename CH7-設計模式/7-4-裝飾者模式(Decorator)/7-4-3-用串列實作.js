function Sale(price) {
    this.price = price || 100;
    this.decoratorsList = [];
}

Sale.prototype.decorate = function (decorator) {
    this.decoratorsList.push(decorator);
};

Sale.prototype.getPrice = function () {
    var price = this.price,
        i,
        max = this.decoratorsList.length,
        name;

    for (i = 0; i < max; i += 1) {
        name = this.decoratorsList[i];
        price = Sale.decorators[name].getPrice(price);
    }

    return price;
};

Sale.decorators = {};

Sale.decorators.fedtax = {
    // 不用父物件的 getPrice()，直接用參數傳遞
    getPrice: function (price) {
        return price + price * 5 / 100;
    }
};

Sale.decorators.quebec = {
    getPrice: function (price) {
        return price + price * 7.5 / 100;
    }
};

Sale.decorators.money = {
    getPrice: function (price) {
        return '$' + price.toFixed(2);
    }
};

var sale = new Sale(100); // 售價是 100 元
sale.decorate('fedtax'); // 加上聯邦稅
sale.decorate('quebec'); // 再加上魁北克省稅
sale.decorate('money'); // 格式化成金額
console.log(sale.getPrice()); // "$122.88"
