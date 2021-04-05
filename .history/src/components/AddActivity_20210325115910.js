import React, { useState } from 'react'

const AddActivity = () => {

    const [data, setData] = useState({
        name:"",
        duration:""
    });

    const handleChange = (e) => {
        e.persist();
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div className="add">
            <div className="input-section">
                <p>Activity:</p>
                <input name="name" placeholder="activityname" onChange={(e) => handleChange(e)} />
            </div>
            <div className="input-section">
                <p>Duration:</p>
                <input name="duration" placeholder="duration" onChange={(e) => handleChange(e)} />
            </div>

            <button>Add Activity</button>
        </div>
    )
}

export default AddActivity;
