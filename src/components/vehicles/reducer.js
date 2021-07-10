const reducer = (
    state = {
        readState: 0,
        data: [],
    },
    action
) => {
    switch (action.type) {
        case 'GET_DATA_PENDING':
            return {
                ...state,
                readState: 1,
            };
        case 'GET_DATA_REJECTED':
            return {
                ...state,
                readState: 3,
            };
        case 'GET_DATA_FULFILLED':
            return {
                ...state,
                readState: 2,
                data: action.payload.data,
            };

        default:
            return state;
    }
};
export default reducer;
