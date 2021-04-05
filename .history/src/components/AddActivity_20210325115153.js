import React, { useState } from 'react'

const AddActivity = () => {

    const [data, setData] = useState({});

    const handleChange = (e) => {

    }

    return (
        <div className="add">
            <div className="input-section">
                <p>Activity:</p>
                <input name="name" placeholder="activityname" onChange={handleChange} />
            </div>
            <div className="input-section">
                <p>Duration:</p>
                <input name="duration" placeholder="duration" onChange={handleChange} />
            </div>
        </div>
    )
}

export default AddActivity;
