/*
 * @Author slashhuang
 * 17/5/4
 * https://github.com/ReactiveX/rxjs/blob/master/doc/observable.md
 */
import Rx from 'rxjs/Rx';
//invokable ==> Observable
 var observable = Rx.Observable.create(function (observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
});
console.log('just before subscribe');
observable.subscribe({
  next: x => console.log('got value ' + x),
  error: err => console.error('something wrong occurred: ' + err),
  complete: () => console.log('done'),
});
console.log('just after subscribe');


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