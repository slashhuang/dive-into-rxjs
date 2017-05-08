# reactive-programming

- event-driven ==> react to events
- scalable ==> react to load
- resilient ==> react to failure
- responsive ==> react to users


## event event-driven

- events can be handled async,without blocking

## scalable

- scale up : make use of parallelism in multi-core system

- scale out : make use of multiple server nodes 

important for scalability: minisize shared mutable state
import for scale out : location transparency, resilience

## resilient

- loose coupling
- string encapsulation of state
- pervasive supervisor hierachy

## responsive

- real-time 


## example

```python
	class Counter extends ActionListener{
		private var count = 0
		button.addActionListener(this)
		def actionPerformed(e:ActionEvent):Unit={
			count+=1
		}
	}
	// problems
	// shared mutable state
	// can not be composed
	// leads quickly to 'callback hell'
```
===> 
1. events are first class
2. events are often represented as messages
3. handlers of events are also first-class
4. complex handlers can be composed from primitive ones



## 体系
1. functional reactive-programming
2. monads
3. abstracting over events ==> futures
4. observables 
5. actors
6. handling falure==>supervisors
7. scale out ==>distributed actors




















