const initialState = {
    counter: 0,
    choosed: null,
    items: [],
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_PAGE":
            return {
                ...state,
                counter: state.counter + 1,
                items: state.items.concat(state.counter),
            }
        case "CHOOSE_PAGE":
            return {
                ...state,
                choosed: action.payload
            }
        default:
            return state
    }
}

export default reducer