// 建構式
function Sale(price) {
    this.price = price || 100;
}

// 原型方法
Sale.prototype.getPrice = function () {
    return this.price;
};
Sale.prototype.decorate = function (decorator) {
    var F = function () {
        },
        overrides = this.constructor.decorators[decorator],
        i, newObj;

    // 繼承目前擁有的物件 this (一開始的物件 ~ 加入了最新 decorator 的物件)
    F.prototype = this;
    // 代理建構式模式
    newObj = new F();
    // 讓子物件可以存取其父物件
    newObj.uber = F.prototype;

    // 複製所有來自 decorator 的額外屬性到新的裝飾過的 newObj 物件
    for (i in overrides) {
        if (overrides.hasOwnProperty(i)) {
            newObj[i] = overrides[i];
        }
    }

    return newObj;
};

// 所有的 decorator 物件都實作在建構式的屬性中
Sale.decorators = {};

Sale.decorators.fedtax = {
    getPrice: function () {
        var price = this.uber.getPrice();
        price += price * 5 / 100;
        return price;
    }
};

Sale.decorators.quebec = {
    getPrice: function () {
        var price = this.uber.getPrice();
        price += price * 7.5 / 100;
        return price;
    }
};

Sale.decorators.money = {
    getPrice: function () {
        return '$' + this.uber.getPrice().toFixed(2);
    }
};

Sale.decorators.cdn = {
    getPrice: function () {
        return 'CDN$' + this.uber.getPrice().toFixed(2);
    }
};

var sale = new Sale(100);
sale = sale.decorate('fedtax');
console.log(sale.getPrice()); // 105
