function Child(a, b, c, d) {
    Parent.apply(this, arguments);
}


// 父建構式
function Article() {
    this.tags = ['js', 'css'];
}

var article = new Article();

// 一個 blog post 就由 classical 模式 #1，繼承了 article 物件
function BlogPost() {
}

BlogPost.prototype = article;
var blog = new BlogPost(); // 參考父建構式
// 注意在上面你不需要 new Article()，因為你已經有一個可用的實體

// 一個 static page 藉由借用建構式，繼承了 article 物件
function StaticPage() {
    Article.call(this);
}

var page = new StaticPage(); // 複製父建構式

alert(article.hasOwnProperty('tags')); // true
alert(blog.hasOwnProperty('tags')); // false
alert(page.hasOwnProperty('tags')); // true

blog.tags.push('html'); // 修改父物件
page.tags.push('php'); // 修改子物件
alert(article.tags.join(', ')); // "js, css, html"


/*
 * 缺點:
 * 原型的屬性都沒被繼承
 * (原型是用來放置重複利用的屬性和方法的地方，因為它不會為每個實體重新建立)
 *
 * 優點:
 * 可以拿到真正來自父物件自身屬性的複製，子物件不會有意外覆寫到父物件屬性的風險
 */
