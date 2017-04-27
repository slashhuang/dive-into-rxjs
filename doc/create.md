##  Observable.create


#### 说明

创建 an observable sequence from a specified subscribe method implementation.

#### 参数

**  (subscribe, parent) **

>  @param {subscribe} subscribe Implementation of the resulting observable sequence's subscribe method, returning a function that will be wrapped in a Disposable.

#### 返回值

 返回 The observable sequence with the specified implementation for the Subscribe method.

 则返回值是 new AnonymousObservable(subscribe, parent);

