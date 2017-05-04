/*
 * @Author slashhuang
 * 17/5/4
 */
import Rx from 'rx'
// https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observer.md
//https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md
/*
 * Rx.Observable.create(subscribe)
 * The Observable object represents a push based collection.
 */
var source = Rx.Observable.create(observer=>{
    observer.onNext(42);
    observer.onNext(44);
    observer.onError(43);
    observer.onCompleted();
    // Note that this is optional, you do not have to return this if you require no cleanup
    return function () { console.log('disposed'); };
});
/*
 * push-based notification, also known as the observer design pattern
 *
 * Observer Methods: create / fromNotifier
 */
var subscriberObs = Rx.Observer.create(
    function (x) { console.log('Next: ' + x); },
    function (err) { console.log('Error: ' + err); },
    function () { console.log('Completed'); });
// var subscription = source.subscribe(subscriberObs);