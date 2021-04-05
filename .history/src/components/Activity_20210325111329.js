import React from 'react'

const Activity = ({ name, duration }) => {
    return (
        <div>
            <p>Activity: {name}, Duration: {duration}</p>
            <button>Delete</button>
        </div>
    )
}

export default Activity;
