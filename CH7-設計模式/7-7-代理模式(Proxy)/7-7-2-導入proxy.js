var proxy = {
    ids: [],
    delay: 50,
    timeout: null,
    callback: null,
    context: null,
    makeRequest: function (id, callback, context) {
        // 新增至 queue
        this.ids.push(id);

        this.callback = callback;
        this.context = context;

        // 設定逾時
        if (!this.timeout) {
            this.timeout = setTimeout(function () {
                proxy.flush();
            }, this.delay);
        }
    },
    flush: function () {
        http.makeRequest(this.ids, 'proxy.handler');

        // 清除 timeout 與 queue
        this.timeout = null;
        this.ids = [];
    },
    handler: function (data) {
        var i, max;

        // 單個影音
        if (parseInt(data.query.count, 10) === 1) {
            proxy.callback.call(proxy.context, data.query.results.Video);
            return;
        }

        // 多個影音
        for (i = 0, max = data.query.results.Video.length; i < max; i += 1) {
            proxy.callback.call(proxy.context, data.query.results.Video[i]);
        }
    }
};

proxy.makeRequest(id, video.updateList, videos);
