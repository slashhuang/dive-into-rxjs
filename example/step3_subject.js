// subscribe + publish pattern
// observer pattern
import { Subject } from 'rxjs';
const sub1 = new Subject();
sub1.subscribe((val) => {
    console.log(val);
});
sub1.subscribe((val) => {
    console.log('hello' + val);
});
// sub1 内部 [fn1, fn2]
sub1.next(1);
sub1.next(2);
// observable ==value==> subject
// observer1 observer2  observer3
