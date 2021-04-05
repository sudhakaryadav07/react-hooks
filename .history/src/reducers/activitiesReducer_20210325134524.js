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
        case "CREATE_ACTIVITY":
            return {
                ...state,
                activities: [...state.activities, action.payload]
            };

        case "DELETE_ACTIVITY":
            return {
                ...state,
                activities: state
                    .activities
                    .filter((activity, index) => {
                        if (activity.id !== action.payload) {
                            return activity;
                        }
                        return false;
                    }),
            };

        default:
            return state;
    }
}

export default activitiesReducer;