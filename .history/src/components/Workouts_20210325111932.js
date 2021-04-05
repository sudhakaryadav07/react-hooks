import React from 'react'
import Activity from './Activity';
import { useSelector } from 'react-redux'

const Workouts = () => {

    const state = useSelector((state) => state);
    console.log(state)

    return (
        <div className="workouts-wrapper">
            <h2>My workout</h2>
            <button>Add Activity</button>
            <Activity />
        </div>
    )
}

export default Workouts
