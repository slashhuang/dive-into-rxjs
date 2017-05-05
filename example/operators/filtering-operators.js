/*
 * @Author slashhuang
 * 17/5/5
 * filtering operators
 */
import Rx from 'rxjs/Rx';
// sample
const sampleObs = Rx.Observable.interval(1000)
const notifierObs = Rx.Observable.fromEvent(document,'click');
/*
 * doc: http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-sample
 *
 * public sample(notifier: Observable<any>): Observable<T>
 * Emits the most recently emitted value from the source Observable whenever another Observable, the notifier, emits.
 */
sampleObs.sample(notifierObs).subscribe(console.log)

