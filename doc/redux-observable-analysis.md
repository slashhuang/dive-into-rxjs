## redux-observable分析

### 1.几个核心概念

- adapter

```js

	const adapter = {
	  input: input$ => /* convert Observable to your preferred stream library */,
	  output: output$ => /* convert your preferred stream back to an Observable */
	};

```

- Epic 

> function (action$: Observable<Action>, store: Store): Observable<Action>;

### 2. 分析一段demo code


	const PING = 'PING';
	const PONG = 'PONG';
	const ping = () => ({ type: PING });
	const pingEpic = action$ =>
	  action$.ofType(PING)
	    .delay(1000) // Asynchronously wait 1000ms then continue
	    .mapTo({ type: PONG });

	const pingReducer = (state = { isPinging: false }, action) => {
	  switch (action.type) {
	    case PING:
	      return { isPinging: true };

	    case PONG:
	      return { isPinging: false };

	    default:
	      return state;
	  }
	};

	// components/App.js

	const { connect } = ReactRedux;

	let App = ({ isPinging, ping }) => (
	  <div>
	    <h1>is pinging: {isPinging.toString()}</h1>
	    <button onClick={ping}>Start PING</button>
	  </div>
	)
```




