const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload.number;
        case 'DECREMENT':
            return state - action.payload.number;
        default:
            return state;
    }
}

export default counterReducer;