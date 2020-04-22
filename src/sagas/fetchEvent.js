
import {call, put, takeLatest} from "redux-saga/effects";

import type {Action} from "../../../redux/model";
import axios from "axios";
import {FETCH_EVENT, FETCH_EVENTS, finishFetchingEvent, finishFetchingEvents, setError} from "../actions/eventActions";

export function* fetchEventEffect(action): * {
    try {
        const response = yield call(fetchEventFromServer);
        yield put(finishFetchingEvent(response.data));
    } catch (e) {
        console.error("Could not load event", e);
        yield put(setError(e));
    }
}

export default function* fetchEvent(): * {
    yield takeLatest(FETCH_EVENT, fetchEventEffect);

}

export function fetchEventFromServer() {
    return axios.get('http://localhost:8080/event');
}