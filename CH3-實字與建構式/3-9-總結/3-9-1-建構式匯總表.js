// 內建的建構式 (應避免)
var o = new Object();
var a = new Array();
var re = new RegExp('[a-z]', 'g');
var s = new String();
var n = new Number();
var b = new Boolean();

throw new Error('uh-oh');

// 實字和原始型態 (較佳)
var o = {};
var a = [];
var re = /[a-z]/g;
var s = '';
var n = 0;
var b = false;

throw {
    name: 'Error',
    message: 'uh-oh'
};

throw Error('uh-oh');
