function Player(name) {
    this.points = 0;
    this.name = name;
}

Player.prototype.play = function () {
    this.points += 1;
    mediator.played();
};


var scoreboard = {
    // 需要更新的 HTML 元素
    element: document.getElementById('results'),

    // 刷新分數的顯示
    update: function (score) {
        var i, msg = '';
        for (i in score) {
            if (score.hasOwnProperty(i)) {
                msg += '<p><strong>' + i + '<\/strong>' + score[i] + '<\/p>';
            }
        }
        this.element.innerHTML = msg;
    }
};


var mediator = {
    // 所有的玩家
    players: {},

    // 初始
    setUp: function () {
        var players = this.players;
        players.home = new Player('Home');
        players.guest = new Player('Guest');
    },

    // 有人玩了，更新分數
    played: function () {
        var players = this.players,
            score = {
                Home: players.home.points,
                Guest: players.guest.points
            };

        scoreboard.update(score);
    },

    // 處理使用者的操作
    keyPress: function (e) {
        e = e || window.event; // IE
        if (e.which === 49) { // key "1"
            mediator.players.home.play();
            return;
        }

        if (e.which === 48) { // key "0"
            mediator.players.guest.play();
            return;
        }
    }
};

// 開始!
mediator.setUp();
window.onkeypress = mediator.keyPress;

// 遊戲在 30 秒後結束
setTimeout(function () {
    window.onkeypress = null;
    alert('Game over!');
}, 30000);
