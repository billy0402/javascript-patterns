/*
 * 裝飾者模式 (Decorator):
 * 新的功能可以在執行時期動態地加進物件。
 * 一個簡樸的物件，一開始只有一些基本功能，接著從可用的 decorators 池中強化此物件。
 */

var sale = new Sale(100); // 售價是 100 元
sale = sale.decorator('fedtax'); // 加上聯邦稅
sale = sale.decorator('quebec'); // 再加上魁北克省稅
sale = sale.decorator('money'); // 格式化成金額
sale.getPrice(); // "$122.88"

var sale = new Sale(100); // 售價是 100 元
sale = sale.decorator('fedtax'); // 加上聯邦稅
sale = sale.decorator('cdn'); // 格式化成加拿大元
sale.getPrice(); // "$122.88"
