import Rx from 'rxjs';
/**
 * Observable
 * observer
 * subject
 * subscription
 * operator
 */
// data、stream  producer
const observable1 = Rx.Observable.of([1,2]);
const observable2 = Rx.Observable.from([1,2,3,4,5]);
/**
 * consumer
 * iterable pattern 可遍历模式
 * array/yield/symbol
 * next(1) next(2)
 * [1,2,3,4,5]
 */
const observer = {
    next: (val) => {
        console.log(val);
    },
    complete: () => {
        
    },
    error: (Err) => {
        console.error(Err);
    },
};
// subscribe 链接observable和observer
observable2.subscribe(observer)
observable1.subscribe(observer);
