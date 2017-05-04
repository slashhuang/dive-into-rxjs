/*
 * @Author slashhuang
 * 17/5/4
 */
import Rx from 'rx'
/* Rx 第一层方法名
 [
 "internals", "config", "helpers", "EmptyError", "ObjectDisposedError",
 "ArgumentOutOfRangeError", "NotSupportedError", "NotImplementedError",
 "doneEnumerator", "CompositeDisposable", "Disposable",
 "SingleAssignmentDisposable", "SerialDisposable", "BinaryDisposable",
 "NAryDisposable", "RefCountDisposable", "Scheduler", "Notification",
 "Observer", "AnonymousObserver", "Observable", "ObservableBase",
 "FlatMapObservable", "CompositeError", "ConnectableObservable",
 "TimeoutError", "VirtualTimeScheduler", "HistoricalScheduler",
  "ReactiveTest", "Recorded", "Subscription", "MockDisposable",
  "TestScheduler", "AnonymousObservable", "Subject", "AsyncSubject",
  "BehaviorSubject", "ReplaySubject", "AnonymousSubject", "Pauser"]
 */

//基本的transform操作 map pluck select ===> MapObservable
// map or select (the two are synonymous)
const originSource = Rx.Observable
    .fromArray([
        { value: 0 },
        { value: 1 },
        { value: 2 }
    ])
//这两者等价
const pluckObs = originSource.pluck('value');
const selectObs = originSource.select(val=>val).pluck('value')
const Subscribers = [
    val=>console.log('next with '+val),
    err=>console.log('err'+err),
    ()=>console.log('completed')
]
//打印0,1,2
pluckObs.subscribe.apply(pluckObs,Subscribers)
//打印0,1,2

selectObs.subscribe.apply(selectObs,Subscribers)
