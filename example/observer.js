/*
 * @Author slashhuang
 * 17/5/4
 */
import Rx from 'rxjs/Rx';
// https://github.com/ReactiveX/rxjs/blob/master/doc/observer.md
/*
 * The Observable object represents the object that sends notifications (the provider);
 * the Observer object represents the class that receives them (the observer).
 */
var subscriberObs = Rx.Observer.create(
     x=>console.log('Next: ' + x),
     err=>console.log('Error: ' + err),
     ()=>console.log('Completed')
)
//直接call observer的instance 方法
subscriberObs.onNext(42);
subscriberObs.onNext(44);
subscriberObs.onError(43);
subscriberObs.onCompleted();
