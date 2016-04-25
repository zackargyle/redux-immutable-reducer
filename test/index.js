import chai from 'chai';
import { createStore } from 'redux';
import immutableReducer, { isImmutable } from '../src/index';
import { shallowReducer, deepReducer, arrayReducer } from './reducers';

describe('immutable reducer', () => {

    function createTest(type, payload, reducer, assertions) {
        describe('shallow state', () => {
            const store = createStore(immutableReducer(reducer));
            const state = store.getState();

            it(`should handle ${type} state updates with Immutable`, () => {
                const action = { type: 'UPDATE', payload: payload };
                store.dispatch(action);
                const newState = store.getState();
                chai.assert.notStrictEqual(state, newState);
                chai.assert.isNotTrue(isImmutable(newState));
                assertions(state, newState, action);
            });
        });
    }

    createTest('array', 5, arrayReducer, (state, newState, action) => {
        chai.assert.strictEqual(newState.length, state.length + 1);
        chai.assert.strictEqual(newState[4], action.payload);
    });

    createTest('shallow', 'baz', shallowReducer, (state, newState, action) => {
        chai.assert.strictEqual(newState.foo, action.payload);
    });

    const payload = { foo: { bar: { baz: 'quux' } } };
    createTest('deep', payload, deepReducer, (state, newState, action) => {
        chai.assert.strictEqual(newState.foo.bar.baz, action.payload.foo.bar.baz);
    });

});
