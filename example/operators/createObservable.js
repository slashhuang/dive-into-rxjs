/*
 * @Author slashhuang
 * 17/5/4
 * 创建observerable
 */

import Rx from 'rxjs/Rx';
 //http://reactivex.io/documentation/operators/start.html
 const startObs = Rx.Observable.start(function(){
    return this.value
},{
    value:1
},
//http://stackoverflow.com/questions/28145890/what-is-a-scheduler-in-rxjs
Rx.Scheduler.timeout)

 startObs.subscribe(val=>console.log(val))