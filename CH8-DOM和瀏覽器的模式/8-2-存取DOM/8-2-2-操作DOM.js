// 反模式
// 在節點建立時就附加至文件
var p, t;
p = document.createElement('p');
t = document.createTextNode('first paragraph');
p.appendChild(t);
document.body.appendChild(p);

p = document.createElement('p');
t = document.createTextNode('second paragraph');
p.appendChild(t);
document.body.appendChild(p);


// 文件片段 (document fragment)
var p, t, frag;
frag = document.createDocumentFragment();

p = document.createElement('p');
t = document.createTextNode('first paragraph');
p.appendChild(t);
frag.body.appendChild(p);

p = document.createElement('p');
t = document.createTextNode('second paragraph');
p.appendChild(t);
frag.body.appendChild(p);

// 單次的重新繪製 (reflow/repaint)
document.body.appendChild(frag);


var oldNode = document.getElementById('result'),
    clone = oldNode.cloneNode(true);

// 對 clone 進行操作...

// 當你完成之後
oldNode.parentNode.replaceChild(clone, oldNode);
