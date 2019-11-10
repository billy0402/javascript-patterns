function inherit(C, P) {
    C.prototype = P.prototype;
}

/*
 * 優點:
 * 更快速的原型鍊查詢，因為所有物件都分享相同的原型
 * 缺點:
 * 繼承練的某處被修改時，會影響整個繼承鏈上的所有物件
 */
