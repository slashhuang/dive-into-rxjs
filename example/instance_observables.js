/*
 * @Author slashhuang
 * 17/5/9
 * https://github.com/ReactiveX/rxjs/blob/master/doc/observable.md
 * Observables are lazy Push collections of multiple values
 */
//observer 公共区域
const Observer = {
  next: x => console.log('got value '+(Object.prototype.toString.call(x)) + x),
  error: err => console.error('something wrong occurred: ' + err),
  complete: () => console.log('done'),
}
 /*
  * Combines multiple Observables to 
  * create an Observable whose values are calculated from the latest values of 
  * each of its input Observables.
  * 
  * combineLatest(other: ObservableInput, project: function): Observable
  */
 import{ Observable}  from 'rxjs/Rx' 
 const o_of1 = Observable.interval(1000)
 const o_of = Observable.timer(1000,1000)
 const o_combineLatest = o_of1.combineLatest(o_of,(f,o)=>(f+'--'+o))
 const subsciber_c = o_combineLatest.subscribe(Observer)
 /*
  * Adds a tear down to be called during the unsubscribe() of this Subscription.
  */
 const sub_0 = subsciber_c.add(()=>{console.log('tear down logic 0')})
 const sub_1 = subsciber_c.add(()=>{console.log('tear down logic 1')})
 const sub_2 = subsciber_c.add(()=>{console.log('tear down logic 2')})
 subsciber_c.remove(sub_2)
 subsciber_c.unsubscribe()


 