import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UUID from 'uuid';

const AddActivity = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        uuid:UUID(),
        name: "",
        duration: ""
    });

    const handleChange = (e) => {
        e.persist();
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const addActivity = () => {
        dispatch({
            type: "CREATE_ACTIVITY",
            payload: data
        })
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

            <button onClick={addActivity}>Add Activity</button>
        </div>
    )
}

export default AddActivity;
