import React from 'react'
import { useDispatch } from 'react-redux';

const Activity = ({ id, name, duration }) => {
    const dispatch = useDispatch();
   
    const delActivity = () => {
        dispatch({
            type: "DELETE_ACTIVITY",
            payload: id
        })
    }

    return (
        <div className="activity-wrapper">
            <p>Activity: {name}, Duration: {duration}</p>
            <button onClick={delActivity}>Delete</button>
        </div>
    )
}

export default Activity;
