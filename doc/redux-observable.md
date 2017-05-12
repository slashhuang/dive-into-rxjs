##  redux-observable

- actions in ===> actions out


- compose ==> function in  and function out

```js
    // 比如applyMiddleware逻辑，修改dispatch
    compose.apply(null,[a,b,c])(store.dispatch) ==>
            (store.dispatch) ==>a(b(c(dispatch))
    // rxjs中的使用方式
    composeEnhancers(
      applyMiddleware(
        epicMiddleware,
        routerMiddleware(browserHistory)
      )
    ) ===> (arguments)=>applyMiddleware(
        epicMiddleware,
        routerMiddleware(browserHistory)
      )(arguments)
```



- combineEpics ==> Merges all epics into a single one.

```js
    (...epics) => (...args) =>
    merge(
        ...epics.map(epic => {
        const output$ = epic(...args);
        if (!output$) {
            throw new TypeError(`combineEpics: one of the provided Epics "${epic.name || '<anonymous>'}" does not return a stream. Double check you\'re not missing a return statement!`);
        }
        return output$;
        })
    );
```

-  createEpicMiddleware ===> 


```js

export function createEpicMiddleware(epic, options = defaultOptions) {
  if (typeof epic !== 'function') {
    throw new TypeError('You must provide a root Epic to createEpicMiddleware');
  }

  // even though we used default param, we need to merge the defaults
  // inside the options object as well in case they declare only some
  options = { ...defaultOptions, ...options };
  const input$ = new Subject();
  const action$ = options.adapter.input(
    new ActionsObservable(input$)
  );
  const epic$ = new Subject();
  let store;

  const epicMiddleware = _store => {
    store = _store;

    return next => {
      epic$
        ::map(epic => {
          const output$ = ('dependencies' in options)
            ? epic(action$, store, options.dependencies)
            : epic(action$, store);

          if (!output$) {
            throw new TypeError(`Your root Epic "${epic.name || '<anonymous>'}" does not return a stream. Double check you\'re not missing a return statement!`);
          }

          return output$;
        })
        ::switchMap(output$ => options.adapter.output(output$))
        .subscribe(store.dispatch);

      // Setup initial root epic
      epic$.next(epic);

      return action => {
        const result = next(action);
        input$.next(action);
        return result;
      };
    };
  };

  epicMiddleware.replaceEpic = epic => {
    // gives the previous root Epic a last chance
    // to do some clean up
    store.dispatch({ type: EPIC_END });
    // switches to the new root Epic, synchronously terminating
    // the previous one
    epic$.next(epic);
  };

  return epicMiddleware;
}


```        
