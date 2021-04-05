const INITIAL = {
    activities: [
        {
            id: 1,
            name: "Sprint",
            duration: 12
        },
        {
            id: 2,
            name: "Long-jump",
            duration: 23
        }
    ]
}

const activitiesReducer = (state = INITIAL, action) => {
    switch (action.type) {
        // case type:
        //     return {
        //         ...state,

        //     };

        default:
            return state;
    }
}

export default activitiesReducer;