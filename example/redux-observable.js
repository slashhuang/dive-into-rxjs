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
      Observable.of(accessDenied()),
      Observable.timer(2000)
        .mapTo({type:'epic2'})
    ));
}
const epic2 = action$ =>
  action$.ofType('epic2')
    .delay(1000)
    .mapTo({ type: 'epic1' });

const epicMiddleware = createEpicMiddleware(combineEpics(epic1,epic2))
const rootReducer = (state={init:'init'}, action) => {
  switch (action.type) {
    case 'epic2':return 
      return { epic2: 'epic2' };
    case 'epic1':
      return { epic1: 'epic1' };
    default:
      return state;
  }
};
const store = createStore(rootReducer,applyMiddleware(epicMiddleware))

store.dispatch({type:'epic1'})
console.log(store.getState())













