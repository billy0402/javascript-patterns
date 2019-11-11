var publisher = {
    subscribers: {
        any: []
    },
    on: function (type, fn, context) {
        type = type || 'any';
        fn = typeof fn === 'function' ? fn : context[fn];

        if (typeof this.subscribers[type] === 'undefined') {
            this.subscribers[type] = [];
        }
        this.subscribers[type].push({fn: fn, context: context || this});
    },
    remove: function (type, fn, context) {
        this.visitSubscribers('unsubscribe', type, fn, context);
    },
    fire: function (type, publication) {
        this.visitSubscribers('publish', type, publication);
    },
    visitSubscribers: function (action, type, arg, context) {
        var pubType = type || 'any',
            subscribers = this.subscribers[pubType],
            i,
            max = subscribers ? subscribers.length : 0;

        for (i = 0; i < max; i += 1) {
            if (action === 'publish') {
                subscribers[i].fn.call(subscribers[i].context, arg);
            } else {
                if (subscribers[i].fn === arg && subscribers[i].context === context) {
                    subscribers.splice(i, 1);
                }
            }
        }
    }
};

function Player(name, key) {
    this.points = 0;
    this.name = name;
    this.key = key;
    this.fire('newPlayer', this);
}

Player.prototype.play = function () {
    this.points += 1;
    this.fire('play', this);
};

var scoreboard = {
    element: document.getElementById('results'),
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

var game = {
    keys: {},
    addPlayer: function (player) {
        var key = player.key.toString().charCodeAt(0);
        this.keys[key] = player;
    },
    handleKeyPress: function (e) {
        e = e || window.event; // IE
        if (game.keys[e.which]) {
            game.keys[e.which].play();
        }
    },
    handlePlay: function (player) {
        var i,
            players = this.keys,
            score = {};

        for (i in players) {
            if (players.hasOwnProperty(i)) {
                score[players[i].name] = players[i].points;
            }
        }
        this.fire('scoreChange', score);
    }
};

function makePublisher(o) {
    var i;
    for (i in publisher) {
        if (publisher.hasOwnProperty(i) && typeof publisher[i] === 'function') {
            o[i] = publisher[i];
        }
    }
    o.subscribers = {any: []};
}

makePublisher(Player.prototype);
makePublisher(game);

Player.prototype.on('newPlayer', 'addPlayer', game);
Player.prototype.on('play', 'handlePlay', game);
game.on('scoreChange', scoreboard.update, scoreboard);
window.onkeypress = game.handleKeyPress;

var playerName, key;
while (true) {
    playerName = prompt('Add player(name)');
    if (!playerName) {
        break;
    }
    while (true) {
        key = prompt('Key for ' + playerName + '?');
        if (key) {
            break;
        }
    }
    new Player(playerName, key);
}
