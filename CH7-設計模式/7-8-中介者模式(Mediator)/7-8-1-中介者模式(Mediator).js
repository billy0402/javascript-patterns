/*
 * 中介者模式 (Mediator):
 * 降低耦合性 (loose coupling)，幫助提升可維護性。
 * 讓各個獨立物件 (colleagues) 不直接相互溝通，而是透過一個 mediator 物件溝通。
 * 當其中一個 colleagues 狀態改變時，它會通知 mediator，而 mediator 就會通知所有應知道此改變的 colleagues。
 */
