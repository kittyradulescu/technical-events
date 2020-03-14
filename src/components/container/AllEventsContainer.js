import React from "react";
import {startFetchingEvents} from "../../actions/eventActions";
import AllEvents from "../presentational/AllEvents";
import {connect} from "react-redux";

export const mapStateToProps = (state) => ({
    events: state.eventDetails.events,
});


export const mapDispatchToProps = (dispatch) => ({
    fetchAllEvents: () => dispatch(startFetchingEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllEvents);
