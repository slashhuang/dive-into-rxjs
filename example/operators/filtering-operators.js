/*
 * @Author slashhuang
 * 17/5/5
 * filtering operators
 */
import Rx from 'rxjs';
//emit (1,2,3,4,5)
const source = Rx.Observable.from([1,2,3,4,5]);
//filter out non-even numbers
const example = source.filter(num => num % 2 === 0);
//output: "Even number: 2", "Even number: 4"
const subscribe = example.subscribe(val => console.log(`subscribe Even number: ${val}`));

const subscribe1 = example.subscribe(val => console.log(`subscribe1 Even number: ${val}`));

