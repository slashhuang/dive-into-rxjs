# dive-into-rxjs

> 对rxjs 5的使用编写demo示例并对rxJS的设计思想做简单分析

> 由于rxjs 5已由版本4迁移，部分api的名字有些变更，需要开发者注意

> [rxjs4 迁移至 rxjs5 文档](https://github.com/ReactiveX/rxjs/blob/master/MIGRATION.md)

> 主程序示例代码在'''/example/*.js'''下面


## 参考文档
[learn rxjs](https://www.learnrxjs.io/)
[reactive io](http://reactivex.io/rxjs/)
[reactive programming](https://en.wikipedia.org/wiki/Reactive_programming)

### 使用

```bash

  $ cnpm install
  $ npm start

```
### rxjs核心理念分层

```bash

    Observable:
        proveider ==> 事件或者数据源invokable

    Observer:
        consumer ==> 监听observerable的信息分发

    Subscription:
        执行Observable的数据

    Operators:
        纯函数，以函数式风格处理数据，比如map, filter, concat, flatMap等操作符.

    Subject:
        和eventEmitter基本相同，唯一的方式分发数据或者事件到多个Observer.

    Schedulers:
        中心化处理并发，允许我们协调计算。比如e.g. setTimeout or requestAnimationFrame or others.
```

### 核心思想

1. Observerable核心

> Observable=>Observer: Subscribing to an Observable is analogous to calling a Function.

```bash

    Creating Observables
    Subscribing to Observables
    Executing the Observable
    Disposing Observables

```

### why rxjs

1. purity: 采用纯函数加工数据

```js
    //老的写法
    var count = 0;
    var button = document.querySelector('button');
    button.addEventListener('click', () => console.log(`Clicked ${++count} times`));

    //对比
    var button = document.querySelector('button');
    Rx.Observable.fromEvent(button, 'click')
        //https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/scan.md
      .scan(count => count + 1, 0)
      .subscribe(count => console.log(`Clicked ${count} times`));

```

2. flow: 通知机制的流式处理

```js
    // 以典型的button每秒点击为例。 采用rx提供的throttleTime操作符
    const button = document.querySelector('button');
    Rx.Observable.fromEvent(button, 'click')
      .throttleTime(1000)
      .scan(count => count + 1, 0)
      .subscribe(count => console.log(`Clicked ${count} times`));

```

**类似的operator**

```bash
    filter, delay, debounceTime, take, takeUntil, distinct, distinctUntilChanged etc.
```

3. values: 数据处理

```js
    const button = document.querySelector('button');
    Rx.Observable.fromEvent(button, 'click')
      .throttleTime(1000)
      .map(event => event.clientX)
      .scan((count, clientX) => count + clientX, 0)
      .subscribe(count => console.log(count))
```

**类似的operator**

```bash
    pluck, pairwise, sample etc.
```


## 核心概念分解

### Observable



> rxJS的各种api命名和lodash很像

> rxJS的通知执行机制python的generator很类似，

> 在程序流上面能够很好的和PromiseA+库等保持兼容性


## 本项目持续更新中，欢迎提出PR

[rxjs 5 github文档](https://github.com/ReactiveX/rxjs/tree/master/doc)

### Copyright

Copyright (C) 2016 ~ [slashhuang](http://github.com/slashhuang) 627284482@qq.com






