import React from 'react'

const AddActivity = () => {
    return (
        <div className="add">
            <div className="input-section">
                <p>Activity:</p>
                <input name="name" placeholder="activityname" />
            </div>
            <div className="input-section">
                <p>Duration:</p>
                <input name="duration" placeholder="activityname" />
            </div>
        </div>
    )
}

export default AddActivity;
