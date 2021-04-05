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
    console.log(action.payload);
    switch (action.type) {
        case "CREATE_ACTIVITY":
            return {
                ...state,
                activities: state.activities.push(action.payload)
            };

        default:
            return state;
    }
}

export default activitiesReducer;