/*
 * @Author slashhuang
 * 17/5/4
 * https://github.com/ReactiveX/rxjs/blob/master/doc/observable.md
 * Observables are lazy Push collections of multiple values
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

