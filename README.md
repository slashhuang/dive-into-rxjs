# dive-into-rxjs

- 对rxjs的使用编写demo示例
- 对rxjs的源码及设计思想做简单分析

### 使用
```
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

- [数据通知机制参考promiseA+规范](https://github.com/promises-aplus/promises-spec)
>
