Redux Immutable Reducer
=============

Immutable state enabled [reducers](http://redux.js.org/docs/basics/Reducers.html) for Redux. [ImmutableJS](https://github.com/facebook/immutable-js) is a peer dependency of this project.

```
npm install --save redux-immutable-reducer
```
How to get it?
```js
// ES6 Modules
import immutableReducer from 'redux-immutable-reducer'
// CommonJS
var immutableReducer = require('redux-immutable-reducer').default
// UMD
var immutableReducer = window.ReduxImmutableReducer.default
```

## What is it?

ReduxImmutableReducer solves the issue of using ImmutableJS with Redux. There are a ton of ugly `.toJS()` and `.fromJS()` calls when using the two together and this allows you to avoid all of it. It also helps keep devtools state clean and readable.

All you have to do to enable it is to wrap your reducer. This will make the state object within your reducer an Immutable object, making it easy to manipulate and keep the data immutable, but then will transform the output state into a regular Javascript datatype for the rest of your application. Here are a few examples.

#### With Arrays

```js
import immutableReducer from 'redux-immutable-reducer';

const list = [1, 2, 3, 4];
function listReducer(state = list, action) {
    switch (action.type) {
        case 'UPDATE':
            return state.push(action.payload);
        default:
            return state;
    }
}
export default immutableReducer(todoReducer);
```

#### With Objects
```js
import immutableReducer from 'redux-immutable-reducer';

const deepState = { foo: { bar: { baz: 'qux' }}};
export function deepReducer(state = deepState, action) {
    switch (action.type) {
        case 'UPDATE':
            return state.mergeDeep(action.payload);
        default:
            return state;
    }
}
export default immutableReducer(deepReducer);
```

## Installation

```
npm install --save redux-immutable-reducer
```

## License

MIT
