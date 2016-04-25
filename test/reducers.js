const arrayState = [1, 2, 3, 4];
export function arrayReducer(state = arrayState, action) {
    switch (action.type) {
        case 'UPDATE':
            return state.push(action.payload);
        default:
            return state;
    }
}

export function shallowReducer(state = { foo: 'bar' }, action) {
    switch (action.type) {
        case 'UPDATE':
            return state.set('foo', action.payload);
        default:
            return state;
    }
}

const deepState = { foo: { bar: { baz: 'qux' }}};
export function deepReducer(state = deepState, action) {
    switch (action.type) {
        case 'UPDATE':
            return state.mergeDeep(action.payload);
        default:
            return state;
    }
}
