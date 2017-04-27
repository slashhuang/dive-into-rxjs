##  observableProto.subscribe


#### 说明

Subscribes an o to the observable sequence.

#### 参数

**  (oOrOnNext, onError, onCompleted)  **

>  @param {Mixed} [oOrOnNext] The object that is to receive notifications or an action to invoke for each element in the observable sequence.
   @param {Function} [onError] Action to invoke upon exceptional termination of the observable sequence.
   @param {Function} [onCompleted] Action to invoke upon graceful termination of the observable sequence.

#### 返回值

 返回 {Disposable} A disposable handling the subscriptions and unsubscriptions.

 则返回值是 new AutoDetachObserver(o)
