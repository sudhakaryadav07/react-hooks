import React from 'react'
import Activity from './Activity';

const Workouts = () => {
    return (
        <div className="workout-wrapper">
            <h2>My workout</h2>
            <button>Add Activity</button>
            <Activity />
        </div>
    )
}

export default Workouts
