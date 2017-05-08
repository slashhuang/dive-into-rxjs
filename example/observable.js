/*
 * @Author slashhuang
 * 17/5/4
 * https://github.com/ReactiveX/rxjs/blob/master/doc/observable.md
 * Observables are lazy Push collections of multiple values
 */
import { Observable } from 'rxjs/Rx';
//observer 公共区域
const Observer = {
  next: x => console.log('got value '+(Object.prototype.toString.call(x)) + x),
  error: err => console.error('something wrong occurred: ' + err),
  complete: () => console.log('done'),
}
/*
 * Creates an Observable that emits some values you specify as arguments
 * of(values: ...T, scheduler: Scheduler):
 */
const o_concat = Observable.of([1,2,3])
o_concat.subscribe(Observer);
/*
 * Creates an Observable that emits no items to the Observer 
 * and immediately emits an error notification.
 * throw(error: any, scheduler: Scheduler)
 */
const o_throw = Observable.throw('error')
o_throw.subscribe(Observer)
/*
 * Creates an Observable that emits no items to the Observer 
 * and immediately emits a complete notification. 
 * empty(scheduler: Scheduler)
 */
const o_empty = Observable.empty()
o_empty.subscribe(Observer)

 /*
 * Creates an Observable that emits a sequence of numbers within a specified range.
 * range(start: number, count: number, scheduler: Scheduler)
 */

const o_range = Observable.range(3,10)
o_range.subscribe(Observer) 
/*
 * Creates an Observable that emits sequential 
 * numbers every specified interval of time, on a specified IScheduler.
 * 
 * interval(period: number, scheduler: Scheduler)
 */
 const o_interval = Observable.interval(1000)
 const subscribed = o_interval.subscribe(Observer) 
 setTimeout(()=>subscribed.unsubscribe(),3000)
/*
 * create the Observable only when the Observer subscribes, 
 * and create a fresh Observable for each Observer
 *
 * return  Observable
 * 
 * defer(observableFactory: function(): SubscribableOrPromise): 
 */
 const o_defer = Observable.defer(()=>{
    if(Math.random()>0.5){
      return Observable.of('---')
    }else{
      return Observable.range(1,2)
    }
 })
o_defer.subscribe(Observer) 
/*
 * Creates a new Observable, that will execute the specified 
 * function when an Observer subscribes to it.
 * 
 * create(onSubscription: function(observer: Observer): TeardownLogic)
 */
 const o_create = Observable.create(observer=>{
  observer.next('create--')
  observer.error('error for create')
  //error和complete只有一个会成为最终态
  // observer.complete()
 })
o_create.subscribe(Observer)
/*
 * Creates an output Observable which concurrently emits all values from every given input Observable
 * 
 * merge(observables: ...ObservableInput, concurrent: number, scheduler: Scheduler)
 */
const clicks = Observable.fromEvent(document, 'click');
const timer = Observable.interval(1000);
const clicksOrTimer = Observable.merge(clicks, timer);
// clicksOrTimer.subscribe(Observer);
/*
 * Combines multiple Observables to create an Observable 
 * whose values are calculated from the latest values of each of 
 * its input Observables.
 * 
 * combineLatest(observable1: ObservableInput, observable2: ObservableInput, project: function, scheduler: Scheduler)
 */
const observablesArr = [1,2,3].map(n=>Observable.timer(n*2000, 1000))
const o_combineLatest = Observable.combineLatest(observablesArr);
o_combineLatest.subscribe(Observer);
















