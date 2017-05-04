/*
 * @Author slashhuang
 * 17/5/4
 * //https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md
 */
 import Rx from 'rx'
 /*
  * returns Observable
  */
 const intervalObs = Rx.Observable.interval(1000 /* ms */)
 /*
  * Rx.Observable.prototype.timeInterval([scheduler])
  * An observable sequence with time interval information on values.
  */
 const timeObs = intervalObs.timeInterval()
 /*
  * Rx.Observable.prototype.take(count, [scheduler])
  * An observable sequence that contains the elements before and including the specified index in the input sequence.
  * https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/take.md
  */
 //这个效果就是take 4次结果，然后就complete
 const takeObs = timeObs.take(5)
 takeObs.subscribe(val=>{
    console.log(val)
 },()=>console.log('errored'),()=>console.log('complete'))