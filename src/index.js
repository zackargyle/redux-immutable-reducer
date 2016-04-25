import Immutable from 'immutable';

export function isImmutable(obj) {
    return Immutable.Iterable.isIterable(obj);
}

export default function ImmutableReducer(reducer) {
    return (state, action) => {
        // Convert incoming data to an Immutable datatype
        let immutableState = state;
        if (!isImmutable(state)) {
            immutableState = Immutable.fromJS(state);
        }
        const newState = reducer(immutableState, action);
        // Convert back from Immutable to regular. Initial states
        // are often written as non-Immutable objects.
        if (!isImmutable(newState)) {
            return newState;
        } else {
            return newState.toJS();
        }
    };
}
