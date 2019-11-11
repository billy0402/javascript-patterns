/*
 * 觀察者模式 (Observer):
 * 降低耦合性，物件不再是去呼叫其他物件的方法。
 * 取而代之的是，物件可以訂閱 (subscribes) 其他物件的特定活動，並在發生時得到通知。
 * 當有重要的事件發生時，出版者會通知(呼叫)所有的訂閱者 (subscribers)，且通常會用 event 物件的形式傳遞一份訊息。
 *
 * 又稱為自訂事件 (custom events)，指的是你用程式所建立，而非瀏覽器所觸發的事件。
 * 又稱為訂閱者/出版者 (subscriber/publisher) 模式。
 *      觀察者/主題     (observer/subject)
 */
