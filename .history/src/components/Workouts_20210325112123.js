import React from 'react'
import Activity from './Activity';
import { useSelector } from 'react-redux'

const Workouts = () => {

    const activities = useSelector((state) => state.activities);
    console.log(activities)

    return (
        <div className="workouts-wrapper">
            <h2>My workout</h2>
            <button>Add Activity</button>
            {activities.map(activity => console.log(activity))}
            <Activity />
        </div>
    )
}

export default Workouts
