/**
 * operator + Subject
 */
import Rx from 'rxjs';
const observable1 = Rx.Observable.from([1,2,3,4]);
const filterObservable1 = observable1.filter((value) => {
    return value%2 === 0;
});
const observer1 = {
    next: (val) => {
        console.log(val);
    },
    complete: () => {
        console.log('completed')
    },
    error: () => {
        console.error('completed')
    },
};
filterObservable1.subscribe(observer1);
/**
 * operator overview ---
 * creation,
 * transformation,
 * filtering,
 * combination,
 * multicasting,
 * error handling,
 * utility
 */
// creation
const clickObservable = Rx.Observable.fromEvent(document, 'click');
clickObservable.subscribe(observer1)
// transformation
const interval = Rx.Observable.interval(1000);
const buffered = interval.buffer(clickObservable);
buffered.subscribe({next: (val) => console.log(val)});
// filtering
const result = clickObservable.debounce(() => Rx.Observable.interval(1000));
result.subscribe(x => console.log(x));
// combination
let age$ = Rx.Observable.of(27, 25, 29, 30);
let name$ = Rx.Observable.of('Foo', 'Bar', 'Beer');
let isDev$ = Rx.Observable.of(true);
Rx.Observable
    .zip(age$,
         name$,
         isDev$)
    .subscribe(x => console.log(x));
// multicasting
const source = Rx.Observable.interval(1000);
const example = source.publish();
//do nothing until connect() is called  
const subscribe = example.subscribe(val => console.log(`Subscriber One: ${val}`));
const subscribeTwo = example.subscribe(val => console.log(`Subscriber Two: ${val}`));
setTimeout(() => {
 example.connect(); 
},5000);