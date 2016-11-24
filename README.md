# dive-into-rxjs

> 对rxjs的使用编写demo示例
> 对rxjs的源码及设计思想做简单分析

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
    rx.Observable.create(observer=>/*obserer.next(value)*/)
```
2. 注册数据通知
```javascript
    [observerInstance/*rxJS实例*/].subscribe((data)=>/*自定义处理方式*/)
    # 注册观察者的方式和redux的实现方式是一模一样的。
```
>[观察者相关可以参考redux源码注释](https://github.com/slashhuang/redux-annotation/blob/master/src/createStore.js)

3. 通知执行
```javascript
    observer.next(data/*通知的数据*/)
```
> rxJS的各种api命名和python的generator很类似，同时又在具体代码编写上和Promise保持了很高的一致性


## 本项目持续更新中，欢迎提出PR






