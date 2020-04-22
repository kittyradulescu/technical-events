import React from "react";
import {FETCH_EVENT, FETCH_EVENTS, FINISH_FETCHING_EVENT, FINISH_FETCHING_EVENTS, SET_ERROR} from "../actions/eventActions";

export const initialState = {
    state: null,
    events: [],
    error: null,
    event: null,
};

export const eventReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_EVENTS:
            return {...state, state: "LOADING"};
        case FINISH_FETCHING_EVENTS:
            return {...state, events: action.data, state: "LOADED"};
        case FETCH_EVENT:
            return {...state, state: "LOADING"};
        case FINISH_FETCHING_EVENT:
            return {...state, event: action.data, state: "LOADED"};
        case SET_ERROR:
            return {...state, error: action.data, state: "ERROR"};
    }
    return state;
};

export default eventReducer;
