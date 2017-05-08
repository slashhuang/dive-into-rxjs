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
 const o_of1 = Observable.of(1,2,3)
 const o_of = Observable.of(4,5,6,1000)
 const o_combineLatest = o_of1.combineLatest(o_of,(f,o)=>(f+o))
 o_combineLatest.subscribe(Observer)
