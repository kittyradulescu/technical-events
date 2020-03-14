import {combineReducers} from "redux";
import {eventReducer as eventDetails} from "./eventReducer";

export const rootReducer = combineReducers({
    eventDetails,
});