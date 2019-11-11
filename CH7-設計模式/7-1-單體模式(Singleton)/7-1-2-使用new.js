/*
 * 單體模式(Singleton):
 * 當使用 new 對同一個建構式建立多個物件，得到的應該只是新的指標，並都指向同個物件
 *
 * 模仿以 class 為基礎且函式並非第一級物件的語言之設計方式，為理論性的練習，不是實用的模式
 */

// 預期結果
var uni = new Universe();
var uni2 = new Universe();
uni === uni2; // true
