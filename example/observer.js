/*
 * @Author slashhuang
 * 17/5/4
 */
import Rx from 'rx'
// https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observer.md
/*
 * The Observable object represents the object that sends notifications (the provider);
 * the Observer object represents the class that receives them (the observer).
 */
var subscriberObs = Rx.Observer.create(
     x=>console.log('Next: ' + x),
     err=>console.log('Error: ' + err),
     ()=>console.log('Completed'));
//直接call observer的instance 方法
subscriberObs.onNext(42);
subscriberObs.onNext(44);
subscriberObs.onError(43);
subscriberObs.onCompleted();
