import React from "react";

export const FETCH_EVENTS = "FETCH_EVENTS";
export const FINISH_FETCHING_EVENTS = "FINISH_FETCHING_EVENTS";
export const SET_ERROR = "FINISH_FETCHING_EVENTS";

const createAction = (type, data) => ({ type, data });

export const startFetchingEvents = () => createAction(FETCH_EVENTS);

export const finishFetchingEvents = (events) => createAction(FINISH_FETCHING_EVENTS, events);

export const setError = (error) => createAction(SET_ERROR, error);