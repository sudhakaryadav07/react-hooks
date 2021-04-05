import React from 'react'

const Activity = ({ name, duration }) => {
    return (
        <div className="activity-wrapper">
            <p>Activity: {name}, Duration: {duration}</p>
            <button>Delete</button>
        </div>
    )
}

export default Activity;
