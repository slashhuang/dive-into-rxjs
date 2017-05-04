/*
 * @Author slashhuang
 * 17/5/4
 */
import Rx from 'rxjs/Rx';
// https://github.com/ReactiveX/rxjs/blob/master/doc/observer.md
/*
 * An Observer is a consumer of values delivered by an Observable
 * Observers are simply a set of callbacks,
 * one for each type of notification delivered by the Observable: next, error, and complete.
 */
 var subscriberObs = {
    next:   x=>console.log('Next: ' + x),
    complete: ()=>console.log('Completed'),
    error: err=>console.log('Error: ' + err),
}
//直接call observer的instance 方法
subscriberObs.next(42);
subscriberObs.next(44);
subscriberObs.error(43);
subscriberObs.complete();
