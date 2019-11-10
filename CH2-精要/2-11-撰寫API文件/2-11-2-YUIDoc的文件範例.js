/**
 * 我的 JavaScript 應用程式
 * @module MY_APP
 */
var MY_APP = {};

/**
 * 一個數學用工具
 * @namespace MY_APP
 * @class MathStuff
 */
MY_APP.MathStuff = {
    /**
     * 兩數加總
     *
     * @method sum
     * @param {Number} a 為第一個數值
     * @param {Number} b 為第一個數值
     * @return {Number} 兩個輸入的總和
     */
    sum: function (a, b) {
        return a + b;
    },
    /**
     * 兩數相乘
     *
     * @method multi
     * @param {Number} a 為第一個數值
     * @param {Number} b 為第一個數值
     * @return {Number} 兩個輸入的乘積
     */
    multi: function (a, b) {
        return a * b;
    }
};

/**
 * 建構 Person 物件
 * @namespace MY_APP
 * @class Person
 * @constructor
 * @param {String} firstName 名字
 * @param {String} lastName 姓氏
 */
MY_APP.Person = function (firstName, lastName) {
    /**
     * Person 的名字
     * @property firstName
     * @type String
     */
    this.firstName = firstName;
    /**
     * Person 的姓氏
     * @property lastName
     * @type String
     */
    this.lastName = lastName;
};

/**
 * 回傳 Person 物件的名字
 *
 * @method getName
 * @return {String} Person 的名字
 */
MY_APP.Person.prototype.getName = function () {
    return this.firstName + ' ' + this.lastName;
};
