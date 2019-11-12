// 範例: 井字遊戲
var ttt = {
    // 已經填過的格子
    played: [],

    // 提供簡寫方法
    get: function (id) {
        return document.getElementById(id);
    },

    // 處理點擊
    setUp: function () {
        this.get('new').onclick = this.newGame;
        this.get('server').onclick = this.remoteRequest;
    },

    // 清除九宮格
    newGame: function () {
        var tds = document.getElementsByTagName('td'),
            max = tds.length,
            i;

        for (i = 0; i < max; i += 1) {
            tds[i].innerHTML = '&nbsp;';
        }

        ttt.played = [];
    },

    // 送出請求
    remoteRequest: function () {
        var script = document.createElement('script');
        script.src = 'server.php?callback=ttt.serverPlay&played=' + ttt.played;
        document.body.appendChild(script);
    },

    // 回呼，伺服器的回合
    serverPlay: function (data) {
        if (data.error) {
            // ttt.serverPlay({"error": "Error description here"});
            alert(data.error);
            return;
        }
        // ttt.serverPlay(3);
        data = parseInt(data, 10);
        this.played.push(data);

        this.get('cell-' + data).innerHTML += '<span class="server"><\/span>';

        setTimeout(function () {
            ttt.clientPlay();
        }, 300); // 這樣彷彿想得很認真
    },

    // 輪到客戶端的回合
    clientPlay: function () {
        var data = 5;

        if (this.played.length === 9) {
            alert('Game over');
            return;
        }

        // 持續取得介於 1 到 9 之間的亂數，直到選到一個還沒填過的格子
        while (this.get('cell-' + data).innerHTML !== '&nbsp;') {
            data = Math.ceil(Math.random() * 9);
        }
        this.get('cell-' + data).innerHTML = 'O';
        this.played.push(data);
    }
};
