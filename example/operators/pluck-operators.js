/*
 * @Author slashhuang
 * 17/5/4
 */
import Rx from 'rxjs/Rx';

//基本的transform操作 map pluck select ===> MapObservable
// map or select (the two are synonymous)
console.log(Rx);
const originSource = Rx.Observable
    .from([
        { value: 0 },
        { value: 1 },
        { value: 2 }
    ])
//这两者等价
const pluckObs = originSource.pluck('value');
const Subscribers = [
    val=>console.log('next with '+val),
    err=>console.log('err'+err),
    ()=>console.log('completed')
]
//打印0,1,2
pluckObs.subscribe.apply(pluckObs,Subscribers)
