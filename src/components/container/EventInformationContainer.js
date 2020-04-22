import React from "react";
import {startFetchingEvent} from "../../actions/eventActions";
import EventInformation from "../presentational/EventInformation";
import {connect} from "react-redux";

export const mapStateToProps = (state) => ({
    event: state.eventDetails.event,
});


export const mapDispatchToProps = (dispatch) => ({
    fetchEvent: () => dispatch(startFetchingEvent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventInformation);
