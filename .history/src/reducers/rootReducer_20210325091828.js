import { combineReducers } from "redux";
import activitiesReducer from "./activitiesReducer";

const rootReducer=combineReducers({
    activities:activitiesReducer
})