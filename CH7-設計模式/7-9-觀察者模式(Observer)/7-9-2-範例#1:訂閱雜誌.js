var publisher = {
    // 訂閱者陣列
    subscribers: {
        any: [] // 事件類型: 對應訂閱者陣列
    },

    // 新增至訂閱者陣列
    subscribe: function (fn, type) {
        type = type || 'any';
        if (typeof this.subscribers[type] === 'undefined') {
            this.subscribers[type] = [];
        }
        this.subscribers[type].push(fn);
    },

    // 從訂閱者陣列中移除
    unsubscribe: function (fn, type) {
        this.visitSubscribers('unsubscribe', fn, type);
    },

    // 逐一對訂閱者呼叫他們在登記時提供的方法
    publish: function (publication, type) {
        this.visitSubscribers('publish', publication, type);
    },

    // 輔助用
    visitSubscribers: function (action, arg, type) {
        var pubType = type || 'any',
            subscribers = this.subscribers[pubType],
            i,
            max = subscribers.length;

        for (i = 0; i < max; i += 1) {
            if (action === 'publish') {
                subscribers[i](arg);
            } else {
                if (subscribers[i] === arg) {
                    subscribers.splice(i, 1);
                }
            }
        }
    }
};

// 將物件轉為一個出版者
function makePublisher(o) {
    var i;
    for (i in publisher) {
        if (publisher.hasOwnProperty(i) && typeof publisher[i] === 'function') {
            o[i] = publisher[i];
        }
    }
    o.subscribers = {any: []};
}

// 實作 paper 物件
var paper = {
    daily: function () {
        this.publish('big news today');
    },
    monthly: function () {
        this.publish('interesting analysis', 'monthly');
    }
};

// 將 paper 物件轉變為出版者
makePublisher(paper);

// 訂閱者物件 joe
var joe = {
    drinkCoffee: function (paper) {
        console.log('Just read ' + paper);
    },
    sundayPreNap: function (monthly) {
        console.log('About to fall asleep reading this ' + monthly);
    }
};

// 讓 paper 物件提供訂閱給 joe (joe 訂閱了 paper)
paper.subscribe(joe.drinkCoffee); // 預設的 any 類型
paper.subscribe(joe.sundayPreNap, 'monthly'); // monthly 類型

// 觸法一些事件
paper.daily();
paper.daily();
paper.daily();
paper.monthly();
// Just read big news today
// Just read big news today
// Just read big news today
// About to fall asleep reading this interesting analysis


// 鬆耦合 (loosely coupled): 隨時可以新增與取消訂閱
// 讓 joe 也變成一個出版者
makePublisher(joe);
joe.tweet = function (msg) {
    this.publish(msg);
};

// 讓 joe 物件提供訂閱給 paper (paper 訂閱了 joe)
paper.readTweets = function (tweet) {
    console.log('Call big meeting! Someone ' + tweet);
};
joe.subscribe(paper.readTweets);

joe.tweet('hated the paper today');
// Call big meeting! Someone hated the paper today
