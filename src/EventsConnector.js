import React from "react";
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import AllEvents from "./components/container/AllEventsContainer";
import fetchAllEvents from "./sagas/fetchAllEvents";
import {all} from "redux-saga/effects";
import {Provider} from "react-redux";
import {rootReducer} from "./reducers/rootReducer";
import {BrowserRouter, Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import EventInformationContainer from "./components/container/EventInformationContainer";
import fetchEvent from "./sagas/fetchEvent";

export const sagaMiddleware = createSagaMiddleware();
const appliedMiddleware = applyMiddleware(sagaMiddleware);

const enhanceWithDevTools = composeWithDevTools(appliedMiddleware);

const store = createStore(rootReducer, undefined, enhanceWithDevTools);

sagaMiddleware.run(rootSaga);

export const EventsConnector = (props) => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route>
                    <Route exact path="/" component={AllEvents} props={props}/>
                    <Route exact path="/event-info" component={EventInformationContainer} props={props}/>
                </Route>
            </Switch>
        </BrowserRouter>

    </Provider>
);

export default function* rootSaga(): * {
    yield all([
        fetchAllEvents(),
        fetchEvent(),
    ]);
}
