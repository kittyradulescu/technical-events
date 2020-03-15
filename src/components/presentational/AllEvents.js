import React, {useEffect} from "react";

const AllEvents = (props) => {

    useEffect(() => {props.fetchAllEvents()}, [props.fetchAllEvents]);

    return props.events.map(event => <div key={event.id}> {event.name} </div>)

};

export default AllEvents;
