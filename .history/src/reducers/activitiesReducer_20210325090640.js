const INITIAL = {

}

export default (state = INITIAL, action) => {
    switch (action) {
        case action.type:
            return {
                ...state,

            };

        default:
            return state;
    }
}