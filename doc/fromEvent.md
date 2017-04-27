##  Observable.fromEvent


#### 说明

创建 an observable sequence by adding an event listener to the matching DOMElement or each item in the NodeList.

#### 参数

** (element, eventName, selector, eventListenerOptions) **

>  @param {Object} element The DOMElement or NodeList to attach a listener.
   @param {String} eventName The event name to attach the observable sequence.
   @param {Object} eventListenerOptions An object describing EventListenerOptions
   @param {Function} [selector] A selector which takes the arguments from the event handler to produce a single item to yield on next.

#### 返回值

 返回 An observable sequence of events from the specified element and the specified event.


 ** 如果对应的element兼容以下几种事件api设计机制 **


 - on/off 兼容 jq, Angular.js, Zepto, Marionette, Ember.js

 - addListener/removeListener  兼容Node.js


 则返回值是 new EventPatternObservable(addHandler, removeHandler, selector).publish().refCount();

 ** 如果是原生Dom事件 **

 则返回值是 new EventObservable(element, eventName, selector).publish().refCount();

