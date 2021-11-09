const initialState = {
    name: "Asrul K"
}

const globalReducer = (state = initialState, action) => {
    if(action.type === "UPDATE_NAME") {
        return {
            ...state,
            name: "Asrul Kadir"
        }
    }
    return state;
}

export default globalReducer;