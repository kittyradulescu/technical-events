
import {call, put, takeLatest} from "redux-saga/effects";

import type {Action} from "../../../redux/model";
import axios from "axios";
import {FETCH_EVENTS, finishFetchingEvents, setError} from "../actions/eventActions";

export function* fetchAllEventsEffect(action): * {
    try {
        const response = yield call(fetchEvents);
        console.log("hello", response);
        yield put(finishFetchingEvents(response.data));
    } catch (e) {
        console.error("Could not load events", e);
        yield put(setError(e));
    }
}

export default function* fetchAllEvents(): * {
    yield takeLatest(FETCH_EVENTS, fetchAllEventsEffect);

}

export function fetchEvents() {
    return axios.get('http://localhost:8080/allevents');
}