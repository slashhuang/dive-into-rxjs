/*
 * 2017/5/12
 * redux observable
 */
import 'rxjs'; 
import { Observable } from 'rxjs/Observable'
import { 
	createEpicMiddleware ,
	ActionsObservable ,
	combineEpics,
	EPIC_END 
} from '../lib/'

import {
	createStore,
	combineReducers,
	applyMiddleware
} from 'redux'	
const epic1 = action$ =>{
  return action$.ofType('epic1')
    .delay(2000)
    .mergeMap(() => Observable.merge(
      Observable.of({ type: 'not good'}),
      Observable.timer(2000)
        .mapTo({type:'epic2'})
    ));
}
const epic2 = action$ =>
  action$.ofType('epic2')
    .delay(1000)
    .mapTo({ type: 'epic3' });

const epicMiddleware = createEpicMiddleware(combineEpics(epic1,epic2))
const logMiddleware = store=>next=>action=>{
	console.log('logger---',action)
	next(action)
}
const rootReducer = (state={init:'init'}, action) => {
	debugger;
  switch (action.type) {
  	case 'epic3': 
    case 'epic2': 
    case 'epic1':
      return action ;
    default:
      return state;
  }
};
const store = createStore(rootReducer,applyMiddleware(epicMiddleware,logMiddleware))

store.dispatch({type:'epic1'})
console.log(store.getState())













