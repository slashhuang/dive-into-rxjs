# dive-into-rxjs

> 对rxjs的使用编写demo示例并对rxJS的设计思想做简单分析

> 主程序示例代码在'''/example/*.js'''下面


### 使用
```bash
  $ cnpm install
  $ cnpm install webpack -g
  $ npm start

```

### 传统数据操作和rxJS的数据流处理方式
```javascript
    # 传统方式
    var executorFn=(data)=>{/*加工你的数据*/};
    $.ajax({
            ...options,
            success:(data){
                executorFn(data)
            }
        })

    # rxJS的数据流处理方式
    let Test = Rx.Observable.create(
                (observer)=>$.ajax(options)
                             .promise()
                             .then((data)=>observer.next(data)))
    Test.subscribe(data => {/*加工你的数据*/})
```

### 数据通知机制

1. 定义数据源的不同方式
```javascript
    rx.Observable.fromEvent
    rx.Observable.create(observer=>obserer.next(value)/*执行通知*/)
```

2. 注册数据通知
```javascript
    [observerInstance/*rxJS实例*/].subscribe((data)=>/*自定义处理方式*/)
    # 注册观察者的方式和redux的实现方式是一模一样的。
```
>[观察者设计方案可以参考redux的实现](https://github.com/slashhuang/redux-annotation/blob/master/src/createStore.js)

3. 通知执行
```javascript
    observer.next(data/*通知的数据*/)
```
> rxJS的各种api命名和lodash很像

> rxJS的通知执行机制python的generator很类似，

> 在程序流上面能够很好的和PromiseA+库等保持兼容性


## 本项目持续更新中，欢迎提出PR



### Copyright

Copyright (C) 2016 ~ [slashhuang](http://github.com/slashhuang) 627284482@qq.com






