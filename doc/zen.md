## rxjs 概述

> rxjs next ==> rxjs 5

## what is rxjs

- reactive programming

- treat events as collections

- manipulate sets of events with operators

## Observables 

- streams of sets
- of any number of things
- over any amount of time
- lazy. Observables will not generate values via an underlying
	producer util they're subscribed to.

- can be "unsubscribed" from . this means the underlying 
	producer can be told to stop and even tear down.


## Observables vs Promise

- they have some similar semantics

let sub = x.subscribe(valueFn,errorFn,completeFn)

sub.unsubscribe()

- create Observables is similar to create Promise

```js
	let p = new Promise((resolve,reject)=>{
		doAsync((err,value)=>{
			if(err){
				reject(err);
			}else{
				resolve(value)
			}
		})
	})
```

```js
	let p = new Observable(observer=>{
		doAsync((err,value)=>{
			if(err){
				observer.error(err);
			}else{
				observer.next(value)
				observer.complete()
			}
		})
	})
```

当执行 subscribe的时候，push notification ==> observer

### Observable creation helpers in rxjs

```js
	Observable.of(val1,val2)
	Observable.from(promise/iterable/observable)
	Observable.fromEvent(item,eventName)

```

Error handling in observable is similar to Promise

```js

	myProise.catch(error=>{
		Promise.resolve(error)
	})
	//rxjs
	myObservable.catch(error=>{
		return Observable.of('okay')
	})
	myObservable.finallly(error=>{
		return 'done'
	})

```

Observable can be 'retried'

```js
	Observable.retry(3)
```

## what are 'operators'

they're methods on observable that allow you to compose 
new Observables









## 参考资料

[rxjs google benlesh talk](https://www.youtube.com/watch?v=KOOT7BArVHQ)










